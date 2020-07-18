$(document).ready(function(){
var colors = ["#FF6F61", "#6B5B95", "#88B04B", "#f2a8a6", "#92A8D1", "#955251", "#B565A7", "#009B77", "#DD4124",
"#D65076", "#45B8AC", "#EFC050", "#5B5EA6", "#9B2335", "#d5c0aa", "#55B4B0", "#E15D44", "#7FCDCD", "#BC243C",
"#C3447A", "#98b4d4"];
var rand = Math.floor(Math.random()*colors.length);
$('#html, #body, #footer, #ad_space, #header').css("background-color", colors[rand]);
$('content, ad_space').css("color", colors[rand]);
});
