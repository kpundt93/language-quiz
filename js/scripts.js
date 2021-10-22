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

    if (q2 === "winter") {
      total += 2
    } else if (q2 === "spring") {
      total += 3
    } else if (q2 === "summer") {
      total += 4
    } else if (q2 === "fall") {
      total += 1
    }

    if (q3 === "cat") {
      total += 3 
    } else if (q3 === "dog") {
      total += 4
    } else if (q3 === "hamster") {
      total += 1
    } else if (q3 == "bird") {
      total += 2
    }

    if (q4 === "pizza") {
      total += 4
    } else if (q4 === "sushi") {
      total += 1
    } else if (q4 === "tacos") {
      total += 2
    } else if (q4 === "ramen") {
      total += 3
    }

    if (q5 === "rock") {
      total += 1
    } else if (q5 === "hip-hop") {
      total += 2
    } else if (q5 === "rnb") {
      total += 3
    } else if (q5 === "pop") {
      total += 4
    }

    if (q6 === "chocolate") {
      total += 2
    } else if (q6 === "strawberry") {
      total += 3
    } else if (q6 === "mint-chip") {
      total += 4
    } else if (q6 === "cookie-dough") {
      total += 1
    }

    if (total <= 6) {
      $("#ruby").show();
      console.log("ruby!");
    } else if (total <= 12) {
      $("#python").show();
      console.log("python!");
    } else if (total <= 18) {
      $("#js").show();
      console.log("javascript!");
    } else if (total <= 24) {
      $("#c-sharp").show();
      console.log("c#!");
    } else {
      console.log("sorry! there was an error, please try again.")
    }
  })
});