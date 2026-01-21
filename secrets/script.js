const inputs = [
    document.getElementById('input-1'),
    document.getElementById('input-2'),
    document.getElementById('input-3')
];

const drops = [
    document.getElementById('drop-1'),
    document.getElementById('drop-2'),
    document.getElementById('drop-3')
];

const previews = [
    document.getElementById('preview-1'),
    document.getElementById('preview-2'),
    document.getElementById('preview-3')
];

const canvas = document.getElementById('result-canvas');
const ctx = canvas.getContext('2d', { willReadFrequently: true });
const downloadBtn = document.getElementById('download-btn');
const placeholder = document.querySelector('.placeholder-text');

let images = [null, null, null];
let animationFrameId = null;

// Setup Event Listeners
drops.forEach((drop, index) => {
    drop.addEventListener('click', () => inputs[index].click());
    
    inputs[index].addEventListener('change', (e) => {
        handleFile(e.target.files[0], index);
    });

    // Drag and Drop
    drop.addEventListener('dragover', (e) => {
        e.preventDefault();
        drop.classList.add('hover');
    });

    drop.addEventListener('dragleave', () => {
        drop.classList.remove('hover');
    });

    drop.addEventListener('drop', (e) => {
        e.preventDefault();
        drop.classList.remove('hover');
        handleFile(e.dataTransfer.files[0], index);
    });
});

function handleFile(file, index) {
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
        const img = new Image();
        img.onload = () => {
            images[index] = img;
            previews[index].innerHTML = `<img src="${e.target.result}" />`;
            drops[index].classList.add('has-image');
            drops[index].querySelector('.icon').style.display = 'none';
            drops[index].querySelector('p').style.display = 'none';
            combineImages();
        };
        img.src = e.target.result;
    };
    reader.readAsDataURL(file);
}

function combineImages() {
    // Check if all images are loaded
    if (!images[0] || !images[1] || !images[2]) return;

    // Use dimensions of the first image
    const width = images[0].naturalWidth;
    const height = images[0].naturalHeight;

    canvas.width = width;
    canvas.height = height;

    // Create offscreen canvases to get pixel data
    const getPixels = (img) => {
        const offCanvas = document.createElement('canvas');
        offCanvas.width = width;
        offCanvas.height = height;
        const offCtx = offCanvas.getContext('2d');
        offCtx.drawImage(img, 0, 0, width, height);
        return offCtx.getImageData(0, 0, width, height);
    };

    const data1 = getPixels(images[0]).data;
    const data2 = getPixels(images[1]).data;
    const data3 = getPixels(images[2]).data;

    const resultImageData = ctx.createImageData(width, height);
    const resultData = resultImageData.data;

    // Perform XOR blending
    for (let i = 0; i < data1.length; i += 4) {
        // Red
        resultData[i] = data1[i] ^ data2[i] ^ data3[i];
        // Green
        resultData[i + 1] = data1[i + 1] ^ data2[i + 1] ^ data3[i + 1];
        // Blue
        resultData[i + 2] = data1[i + 2] ^ data2[i + 2] ^ data3[i + 2];
        // Alpha (set to fully opaque)
        resultData[i + 3] = 255;
    }

    animateXorReveal(resultImageData, width, height);
    
    // UI Updates
    placeholder.style.display = 'none';
    downloadBtn.style.display = 'block';
}

function animateXorReveal(resultImageData, width, height) {
    if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
    }

    // Create offscreen canvases for each image
    const imageCanvases = images.map(img => {
        const offCanvas = document.createElement('canvas');
        offCanvas.width = width;
        offCanvas.height = height;
        const offCtx = offCanvas.getContext('2d');
        offCtx.drawImage(img, 0, 0, width, height);
        return offCanvas;
    });

    // Create final result canvas
    const resultCanvas = document.createElement('canvas');
    resultCanvas.width = width;
    resultCanvas.height = height;
    const resultCtx = resultCanvas.getContext('2d');
    resultCtx.putImageData(resultImageData, 0, 0);

    const durationMs = 1200;
    const combinePhase = 0.6; // 60% of time for combining, 40% for reveal
    const startTime = performance.now();

    const step = (now) => {
        const elapsed = Math.min(now - startTime, durationMs);
        const progress = elapsed / durationMs;

        ctx.clearRect(0, 0, width, height);

        if (progress < combinePhase) {
            // Phase 1: Show images combining
            const combineProgress = progress / combinePhase;
            const scale = 0.3 + (0.7 * combineProgress);
            const offset = (1 - combineProgress) * 0.15;
            
            // Calculate positions for images converging
            const positions = [
                { x: -width * offset, y: -height * offset }, // Top-left
                { x: width * offset, y: -height * offset },  // Top-right
                { x: 0, y: height * offset }                  // Bottom-center
            ];

            // Draw each image with opacity and position
            imageCanvases.forEach((imgCanvas, idx) => {
                const pos = positions[idx];
                const opacity = Math.max(0, 1 - combineProgress * 1.5);
                
                ctx.save();
                ctx.globalAlpha = opacity;
                ctx.drawImage(
                    imgCanvas,
                    pos.x, pos.y,
                    width * scale, height * scale
                );
                ctx.restore();
            });

            // Gradually show XOR result as images combine
            const xorOpacity = Math.min(1, combineProgress * 2);
            ctx.save();
            ctx.globalAlpha = xorOpacity;
            ctx.drawImage(resultCanvas, 0, 0);
            ctx.restore();
        } else {
            // Phase 2: Reveal final result from top to bottom
            const revealProgress = (progress - combinePhase) / (1 - combinePhase);
            const revealHeight = Math.max(1, Math.floor(height * revealProgress));
            ctx.drawImage(resultCanvas, 0, 0, width, revealHeight, 0, 0, width, revealHeight);
        }

        if (elapsed < durationMs) {
            animationFrameId = requestAnimationFrame(step);
        } else {
            animationFrameId = null;
            ctx.drawImage(resultCanvas, 0, 0);
        }
    };

    animationFrameId = requestAnimationFrame(step);
}

downloadBtn.addEventListener('click', () => {
    const link = document.createElement('a');
    link.download = 'revealed_secret.png';
    link.href = canvas.toDataURL();
    link.click();
});
