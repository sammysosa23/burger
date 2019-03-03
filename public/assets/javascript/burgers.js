// $(document).ready(function () {
//   $(".devour").on("click", function (event) {
//     var id = $(this).data("id");

//     var newDevourState = {
//       devour: true
//     };

//     $(document).ready(function () {

//       $.ajax("api/burgers/" + id, {
//         type: "PUT",
//         data: newDevourState
//       }).then(
//         function () {
//           console.log("Devoured it!", newDevouredState);
//           location.reload();
//         }
//       );
//     });
//     $("#submitButton").on("click", function (event) {
//       console.log("clicked");
//       event.preventDefault();

//       var newBurger = {
//         burger_name: $("#bu").val(),
//       };
//       $.ajax("api/burgers", {
//         type: "POST",
//         data: newBurger
//       }).then(
//         function () {
//           console.log.call("Burger was good");
//           location.reload();
//         }
//       );
//     });
//     $(".delete").on("click", function (event) {
//       var id = $(this).data("id");

//       $.ajax("api/burgers/" + id, {
//         type: "DELETE"
//       }).then(
//         function () {
//           console.log("deleted burger", id);
//           location.reload();
//         }
//       );
//     });
//   });
// });

// $(".eat-icon").hover(function () {
//   $(this).css({ opacity: 0.5 });
// },
//   function () {
//     $(this).css({ opacity: 1 });
//   });
// $(".trash-icon").hover(function () {
//   $(this).css({ opacity: 0.5 });
// },
//   function () {
//     $(this).css({ opacity: 1 });
//   });
