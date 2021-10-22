$(document).ready(function() {
  $("#quiz").submit(function(event) {
    event.preventDefault();
    const q1 = $("input:radio[name=q1]:checked").val();
    const q2 = $("input:radio[name=q2]:checked").val();
    const q3 = $("input:radio[name=q3]:checked").val();
    const q4 = $("input:radio[name=q4]:checked").val();
    const q5 = $("input:radio[name=q5]:checked").val();
    const q6 = $("input:radio[name=q6]:checked").val();
    let total = 0;

    if (q1 === "green") {
      total += 1
    } else if (q1 === "yellow") {
      total += 2
    } else if (q1 === "blue") {
      total += 3
    } else if (q1 === "red") {
      total += 4
    }
  })
});