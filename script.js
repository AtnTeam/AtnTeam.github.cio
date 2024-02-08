function checkId() {
  var userId = document.getElementById("userIdInput").value;

  // Створення об'єкту XMLHttpRequest
  var xhr = new XMLHttpRequest();

  // Налаштування запиту
  xhr.open(
    "POST",
    "https://g-tracker.space/admin_api/v1/conversions/log",
    true
  );
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.setRequestHeader("Api-Key", "e48e6ecc28356b34343c57167d32ad14");

  // Обробник події завершення запиту
  xhr.onload = function () {
    if (xhr.status >= 200 && xhr.status < 300) {
      // Успішна відповідь
      var response = JSON.parse(xhr.responseText);
      console.log("Отримано відповідь від сервера:", response);

      // Тут ви можете додати логіку для обробки відповіді від Keitaro
      if (response.valid) {
        document.getElementById("resultMessage").innerHTML =
          "ID користувача валідний!";
      } else {
        document.getElementById("resultMessage").innerHTML =
          "ID користувача невалідний.";
      }
    } else {
      // Помилка запиту
      console.error(
        "Сталася помилка під час виконання запиту:",
        xhr.statusText
      );
      document.getElementById("resultMessage").innerHTML =
        "Сталася помилка під час перевірки ID користувача.";
    }
  };

  // Обробник події помилки
  xhr.onerror = function () {
    console.error("Сталася помилка під час виконання запиту.");
    document.getElementById("resultMessage").innerHTML =
      "Сталася помилка під час перевірки ID користувача.";
  };

  // Відправка запиту з даними користувача
  xhr.send(JSON.stringify({ userId: userId }));
}
