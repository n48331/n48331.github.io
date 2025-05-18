var today = new Date();

var dd = parseInt(String(today.getDate()).padStart(2, "0"));
var mm = parseInt(String(today.getMonth()).padStart(2, "0"));

// var over = '<i class="uil uil-check"></i>';
// var notOver = '<i class="uil uil-arrow-up"></i>';
// var bday = '<i class="uil uil-gift"></i>';
var over = `<lottie-player
src="https://assets6.lottiefiles.com/packages/lf20_to8oip6o.json"
background="transparent" speed=".5" style="width: 50px;float:right;border:0;margin:0;padding:0" loop autoplay/>`;
var notOver = `<lottie-player
src="https://assets5.lottiefiles.com/packages/lf20_WWifl0Qmyq.json"
 background="transparent" speed=".8" style="width: 50px;float:right;" loop autoplay/>`;
var bday = `<lottie-player
src="https://assets5.lottiefiles.com/datafiles/zc3XRzudyWE36ZBJr7PIkkqq0PFIrIBgp4ojqShI/newAnimation.json"
mode="bounce" background="transparent" speed=".8" style="width: 50px;float:right;" loop autoplay/>`;
var dayToday = setDay(mm, dd);

const month = {
  Jan: 0,
  Feb: 1,
  Mar: 2,
  April: 3,
  May: 4,
  June: 5,
  July: 6,
  Aug: 7,
  Sept: 8,
  Oct: 9,
  Nov: 10,
  Dec: 11,
};
const data = [
  {
    name: "Nabeel",
    dob: { mm: month.Nov, mmstr: "Nov", dd: 14 },
    ph:8136927418
  },
  {
    name: "Finu",
    dob: { mm: month.Nov, mmstr: "Nov", dd: 13 },
    ph:9037272418
  },
  {
    name: "Becki",
    dob: { mm: month.Dec, mmstr: "Dec", dd: 1 },
    ph:8179638315
  },
  {
    name: "Anjun",
    dob: { mm: month.July, mmstr: "July", dd: 1 },
    ph:9947966342
  },
  {
    name: "Nawaf",
    dob: { mm: month.Sept, mmstr: "Sept", dd: 20 },
    ph:9895716467
  },
  {
    name: "Shaheef",
    dob: { mm: month.May, mmstr: "May", dd: 19 },
    ph:8593911127
  },
  {
    name: "Saurav",
    dob: { mm: month.Nov, mmstr: "Nov", dd: 2 },
    ph:7337357314
  },
  {
    name: "Arjun",
    dob: { mm: month.June, mmstr: "Jun", dd: 16 },
    ph:8921414125
  },
  {
    name: "Alan",
    dob: { mm: month.Jan, mmstr: "Jan", dd: 3 },
    ph:9072542506
  },
  {
    name: "Melbin",
    dob: { mm: month.Dec, mmstr: "Dec", dd: 26 },
    ph:9207669032
  },
  {
    name: "Sandesh",
    dob: { mm: month.Jan, mmstr: "Jan", dd: 17 },
    ph:7902566567
  },
  {
    name: "Ujwal",
    dob: { mm: month.Oct, mmstr: "Oct", dd: 24 },
    ph:8138888424
  },
  {
    name: "Nafi",
    dob: { mm: month.Oct, mmstr: "Oct", dd: 25 },
    ph:7034422814
  },
  {
    name: "Arun",
    dob: { mm: month.Oct, mmstr: "Oct", dd: 31 },
    ph:9020504104
  },
  {
    name: "Shameer",
    dob: { mm: month.Feb, mmstr: "Feb", dd: 10 },
    ph:9072388838
  },
  {
    name: "Shahabas",
    dob: { mm: month.July, mmstr: "Jul", dd: 3 },
    ph:8075973450
  },
  {
    name: "Minhaj",
    dob: { mm: month.April, mmstr: "April", dd: 15 },
    ph:7907055939
  },
  {
    name: "Fidha",
    dob: { mm: month.Nov, mmstr: "Nov", dd: 22 },
    ph:8606079967
  },
  {
    name: "Navas",
    dob: { mm: month.Jan, mmstr: "Jan", dd: 3 },
    ph:9633181418
  },
  {
    name: "Aseeb",
    dob: { mm: month.Jan, mmstr: "Jan", dd: 13 },
    ph:9072352899
  },
  {
    name: "Deekshita",
    dob: { mm: month.Jan, mmstr: "Jan", dd: 13 },
    ph:555
  },
  {
    name: "Fouz",
    dob: { mm: month.Dec, mmstr: "Dec", dd: 4 },
    ph:9207833360
  },
  {
    name: "Nihal",
    dob: { mm: month.Dec, mmstr: "Dec", dd: 9 },
    ph:9605967551
  },
  {
    name: "Thaniya",
    dob: { mm: month.Dec, mmstr: "Dec", dd: 22 },
    ph:555
  },
  {
    name: "Famraz",
    dob: { mm: month.April, mmstr: "April", dd: 18 },
    ph:9495484391
  },
  
  {
    name: "Aflah",
    dob: { mm: month.July, mmstr: "July", dd: 17 },
    ph:7736952527
  },

  {
    name: "Azeem",
    dob: { mm: month.Nov, mmstr: "Nov", dd: 8 },
    ph:7736744198
  },
  {
    name: "Shiril",
    dob: { mm: month.Aug, mmstr: "Aug", dd: 14 },
    ph:8714872114
  },
 
  {
    name: "Thanu",
    dob: { mm: month.April, mmstr: "April", dd: 28 },
    ph:555
  },
  {
    name: "Sufail",
    dob: { mm: month.May, mmstr: "May", dd: 20 },
    ph:9562026070
  },
  {
    name: "Nisha",
    dob: { mm: month.Sept, mmstr: "Sept", dd: 24 },
    ph:8547507152
  },
];

// TODO add more data

var imageLink = "https://api.dicebear.com/9.x/personas/svg";
var persons = [];

for (let i = 0; i < data.length; i++) {
  persons.push({
    name: data[i].name,
    dateOfBirth: `${data[i].dob.mmstr} ${data[i].dob.dd}`,
    image: imageLink + `?seed=${data[i].name}${data[i].name}`,
    over: isDay(setDay(data[i].dob.mm, data[i].dob.dd)),
    day: setDay(data[i].dob.mm, data[i].dob.dd),
    ph:data[i].ph
  });
}

persons.sort((a, b) => {
  if (!b.day < dayToday && a.day < dayToday) return 1;
  else if (!a.day < dayToday && b.day < dayToday) return -1;
  else return a.day - b.day;
});

if (persons[0].day > dayToday) {
  persons[0].over = `<lottie-player
  src="https://assets6.lottiefiles.com/packages/lf20_to8oip6o.json"
  background="transparent" speed=".5" style="width: 50px;float:right;border:0;margin:0;padding:0" loop autoplay/>`;
  // persons[0].over = '<i class="uil uil-arrow-left"></i>';
}
// persons[0].over ='<i class="uil uil-arrow-left"></i>'
function check(a, today) {
  var notOver = `<lottie-player
  src="https://assets5.lottiefiles.com/packages/lf20_WWifl0Qmyq.json"
   background="transparent" speed=".8" style="width: 50px;float:right;" loop autoplay/>`;
  // var notOver = '<i class="uil uil-arrow-up"></i>';
  var bday = `https://assets5.lottiefiles.com/datafiles/zc3XRzudyWE36ZBJr7PIkkqq0PFIrIBgp4ojqShI/newAnimation.json"
  mode="bounce" background="transparent" speed=".8" style="width: 50px;float:right;" loop autoplay/>`;
  // var bday = '<i class="uil uil-gift"></i>';
  if (a == today) return bday;
  
  else return notOver;
}
function setDay(m, d) {
  return m * 30 + d;
}
function isDay(x) {
  // if (x == dayToday) {
  //   const person = data.find(person => setDay(person.dob.mm, person.dob.dd) === x)?.name || "Friend";
  //   sendMessage(`🎉 Happy Birthday, ${person}`, 'Markdown');
  // }
  return x == dayToday ? bday : notOver;
}
