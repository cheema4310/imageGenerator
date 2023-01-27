const onSubmit = (e) => {
  e.preventDefault();

  document.querySelector("#showImage").src = "";
  document.querySelector(".msg").textContent = "";

  const prompt = document.querySelector("#prompt").value;
  const size = document.querySelector("#size").value;

  if (prompt === "") {
    alert("Enter some text to generate image");
    return;
  }
  generateImageRequest(prompt, size);
};

const generateImageRequest = async (prompt, size) => {
  try {
    showLoading();
    const response = await fetch("/openai/generateimage", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt, size }),
    });

    if (!response.ok) {
      hideLoading();
      throw new Error("That image could not be generated");
    }

    const res = await response.json();

    document.querySelector("#showImage").src = res.resp;
    document.querySelector("#showImage").style.display = "block";

    hideLoading();
  } catch (error) {
    document.querySelector(".msg").textContent = error;
  }
};

const showLoading = () => {
  document.querySelector(".loading").classList.add("show");
};
const hideLoading = () => {
  document.querySelector(".loading").classList.remove("show");
};

document.querySelector("#imageForm").addEventListener("submit", onSubmit);
