document.getElementById('container').innerHTML = `
    <h1>Calculate Your Age</h1>
    <label for="date">Date Of Bath:</label>
    <input type="date" class="date" id="date">
    <button id="calculateBtn">Calculate Age</button>
    <div id="result">
    </div>
`;

const date = document.getElementById('date');
const result = document.getElementById('result');
const calculateBtn = document.getElementById("calculateBtn");

calculateBtn.addEventListener('click', () => {
    if (!date.value) {
        result.innerText = "Please Enter your Birth.";
        result.classList.add('result');
        return;
    }
    const birthDate = new Date(date.value);
    const today = new Date();

    if (birthDate > today) {
        result.innerText = "Please Enter a valid birth date.";
        result.classList.add('result');
        return;
    }

    let years = today.getFullYear() - birthDate.getFullYear()
    let month = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (days < 0) {
        month--;
        days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }

    if (month < 0) {
        years--;
        month += 12;
    }

    if (years < 0) years = 0;
    result.innerText = `Your Age: ${years} years ${month} months ${days} days.`;
    result.classList.add('result');
})