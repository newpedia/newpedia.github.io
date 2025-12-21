import requests
from bs4 import BeautifulSoup

# URL root dari situs yang ingin diambil URL-nya
url = "https://newpedia.github.io"

# Mengirim request ke halaman
response = requests.get(url)

# Mengecek apakah request berhasil
if response.status_code == 200:
    # Menggunakan BeautifulSoup untuk parsing HTML
    soup = BeautifulSoup(response.text, 'html.parser')

    # Menemukan semua elemen <a> yang berisi hyperlink
    links = soup.find_all('a')

    # Mengambil URL dari atribut href
    urls = set()
    for link in links:
        href = link.get('href')
        if href and href.startswith('/'):  # Memastikan ini adalah URL internal
            full_url = url + href  # Menambahkan root URL untuk mendapatkan URL penuh
            urls.add(full_url)

    # Menampilkan jumlah URL yang ditemukan
    print(f"Jumlah URL yang ditemukan: {len(urls)}")
else:
    print("Gagal mengakses halaman.")
