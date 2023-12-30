document.addEventListener("DOMContentLoaded", function () {
  const avatar = document.getElementById("avatar");

  function uploadFile() {
    const file = avatar.files[0];
    if (file) {
      const formData = new FormData();
      formData.append("file", file);

      fetch("http://localhost:5000/upload", {
        method: "POST",
        body: formData,
      })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
});
