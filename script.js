const buttonRandom = document.querySelector('.btn-get-quotes')
const quotesText = document.querySelector('.quotes')
const quotesSource = document.querySelector('.source')


const quotes = [
    {
        "quote": " “Bahwa hidup harus menerima, penerimaan yang indah. Bahwa hidup harus dimengerti, pengertian yang benar. Bahwa hidup harus memahami pemahaman yang tulus.” ",
        "source": "-Tere Liye"
    },
    {
        "quote": " “Cinta adalah perbuatan. Kata-kata dan tulisan indah adalah omong kosong.” ",
        "source": "-Tere Liye, Kau, Aku & Sepucuk Angpau Merah"
    },
    {
        "quote": " “Hidup harus terus berlanjut, tidak peduli seberapa menyakitkan atau membahagiakan, biar waktu yang menjadi obat.” ",
        "source": "-Tere Liye, Ayahku (Bukan) Pembohong"
    },
    {
        "quote": " “Kebahagiaan adalah kesetiaan... setia atas indahnya merasa cukup... setia atas indahnya berbagi... setia atas indahnya ketulusan berbuat baik.” ",
        "source": "-Tere Liye, Moga Bunda Disayang Allah"
    },
    {
        "quote": " “Berasumsi dengan perasaan, sama saja dengan membiarkan hati kau diracuni harapan baik, padahal boleh jadi kenyataannya tidak seperti itu, menyakitkan.” ",
        "source": "-Tere Liye, Kau, Aku & Sepucuk Angpau Merah"
    },
    {
        "quote": " “Hanya orang-orang dengan hati damailah yang boleh menerima kejadian buruk dengan lega.” ",
        "source": "-Tere Liye, Rembulan Tenggelam Di Wajahmu"
    },
    {
        "quote": " “Terkadang kesedihan memerlukan kesendirian, meskipun seringkali kesendirian mengundang kesedihan tak tertahankan.” ",
        "source": "-Tere Liye, Kisah Sang Penandai"
    },
    {
        "quote": " “Tapi apa lagi yang membuat hati berdesir selain pertemuan yang tidak disengaja?” ",
        "source": "-Tere Liye, Kisah Sang Penandai"
    },
    {
        "quote": " “Tidak ada yang pergi daripada hati. Tidak ada yang hilang dari sebuah kenangan.” ",
        "source": "-Tere Liye"
    },
    {
        "quote": " “Cinta itu jangan dipaksakan, jangan diburu-buru karena nanti kita yang akan merusak jalan ceritanya sendiri.” ",
        "source": "-Tere Liye"
    },
    {
        "quote": " “Sungguh tidak ada mawar yang tumbuh di tegarnya karang.” ",
        "source": "-Tere Liye, Sunset Bersama Rosie"
    },
    {
        "quote": " “Aku hanya berani bermimpi, sungguh tidak terhitung berapa kali aku bermimpi tentang kau.” ",
        "source": "-Tere Liye, Kau, Aku & Sepucuk Angpau Merah"
    },
    {
        "quote": " “Berhenti lari dari kenyataan hidupmu. Berhenti cemas atas penilaian orang lain, dan mulailah berbuat baik sebanyak mungkin.” ",
        "source": "-Tere Liye, Rindu"
    },
    {
        "quote": " “Ya, cinta seperti hantu. Semua orang membicarakannya, tetapi sedikit sekali yang benar - benar pernah melihatnya.” ",
        "source": "-Tere Liye, Berjuta Rasanya"
    },
    {
        "quote": " “Pecinta sejati tidak akan pernah menyerah sebelum kematian itu sendiri datang menjemput dirinya.” ",
        "source": "-Tere Liye, Kisah Sang Penandai"
    },
    {
        "quote": " “Mencintaimu bukanlah sebuah penyesalan. Tak berani mengatakan isi hatiku padamu adalah penyesalan.” ",
        "source": "-Tere Liye"
    },
]

function randomQuotes(){
    let random = Math.floor(Math.random() * quotes.length)
    quotesText.textContent = quotes[random].quote
    quotesSource.textContent = quotes[random].source
}

buttonRandom.addEventListener('click', function () {
    randomQuotes()
})