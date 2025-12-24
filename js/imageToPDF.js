<script>
async function imageToPDF() {
  const { jsPDF } = window.jspdf;
  const files = document.getElementById("imageInput").files;

  if (!files.length) {
    alert("Pilih gambar terlebih dahulu");
    return;
  }

  const pdf = new jsPDF();
  let first = true;

  for (const file of files) {
    const imgData = await readImage(file);

    if (!first) pdf.addPage();
    first = false;

    pdf.addImage(imgData, "JPEG", 10, 10, 190, 0);
  }

  pdf.save("converted-images.pdf");
}

function readImage(file) {
  return new Promise(resolve => {
    const reader = new FileReader();
    reader.onload = e => resolve(e.target.result);
    reader.readAsDataURL(file);
  });
}
</script>
