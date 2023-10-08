// ------Contoh penggunaan if, else, Nested if-----

let umur=18;
let WNI=true;
let sehat=true;

//if
if (umur=18) {
    console.log('Usia Anda memenuhi persyaratan pendaftaran peserta lomba');
}
//if else
if (sehat) {
    console.log('Kebugaran Anda memenuhi persyaratan pendaftaran peserta lomba');
} else {
    console.log('Kebugaran Anda tidak memenuhi persyaratan pendaftaran peserta lomba');
}
//nested if
if (umur>=18) {
    console.log('Usia Anda memenuhi persyaratan pendaftaran peserta lomba');
    if (WNI) {
        console.log('Kewarganegaraan Anda memenuhi persyaratan pendaftaran peserta lomba')
        if (sehat) {
            console.log('Kebugaran Anda memenuhi persyaratan pendaftaran peserta lomba');
        }else{
            console.log('Kebugaran Anda tidak memenuhi persyaratan pendaftaran peserta lomba');
        }
    }else{
        console.log('Kewarganegaraan Anda tidak memenuhi persyaratan pendaftaran peserta lomba')
    }
}else{
    console.log('Usia Anda tidak memenuhi persyaratan pendaftaran peserta lomba');
}


// ------Contoh penggunaan switch case-----

let tipemhs='kura-kura';
switch (tipemhs) {
    case 'kura-kura':
        console.log('Tipe mahasiswa dengan aktivitas setelah kuliah rapat');
        break;
    case 'kupu-kupu':
        console.log('Tipe mahasiswa dengan aktivitas setelah kuliah langsung pulang rumah');
        break;
    case 'kunang-kunang':
        console.log('Tipe mahasiswa dengan aktivitas setelah kuliah mencari tempat nongkrong');
        break;
    case 'kuman-kuman':
        console.log('Tipe mahasiswa dengan aktivitas setelah kuliah langsung main healing');
        break;
    default:
        console.log('Tipe mahasiswa tanpa tipe alias nolep');
        break;
}


// ------Contoh penggunaan for-----
let friend = ['ubed', 'doni', 'rizka', 'nanda', 'azzam'];

for (let i = 0; i < friend.length; i++) {
  console.log(friend[i]);
}

// ------Contoh penggunaan While, Do While-----
let negaraasean = ['Indonesia', 'Malaysia', 'Thailand', 'Singapura', 'Vietnam'];
let i=0;
let j=4;
//while
while (i<=4) {
    console.log(negaraasean[i]);
    i++;
}
//do while
do {
    console.log(negaraasean[j]);
    j--;
} while (j>=0);


// ------Contoh penggunaan function-----
let totaluang;
function TotalKasOrganisasi(jumlah, nominal) {
    totaluang = jumlah * nominal;
    console.log("Jumlah Uang Kas : "+totaluang);
}

TotalKasOrganisasi(50, 25000);