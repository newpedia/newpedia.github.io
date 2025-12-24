<script>
function convertImage(type) {
  const file = document.getElementById("imageInput").files[0];
  if (!file) return alert("Pilih gambar");

  const reader = new FileReader();
  reader.onload = e => {
    const img = new Image();
    img.src = e.target.result;
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;

      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0);

      const link = document.createElement("a");
      link.download = "converted." + type;
      link.href = canvas.toDataURL("image/" + type);
      link.click();
    };
  };
  reader.readAsDataURL(file);
}

function imageToPNG() { convertImage("png"); }
function imageToJPG() { convertImage("jpeg"); }
</script>
