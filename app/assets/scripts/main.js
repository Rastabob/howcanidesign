$(document).ready(function(){$(".js #container").animsition({inClass:"fade-in-up-sm",outClass:"fade-out-up-sm",inDuration:400,outDuration:400,linkElement:".al",loading:!0,loadingParentElement:"body",loadingClass:"animsition-loading",timeout:!1,timeoutCountdown:5e3,onLoadEvent:!0,browser:["animation-duration","-webkit-animation-duration"],overlay:!1,transition:function(n){window.location.href=n}}),$(document).on("click",".hamburger-container",function(n){$(".menu").hasClass("animate")?$(".menu, .bar").removeClass("animate"):$(".menu, .bar").addClass("animate")}),$(document).on("click",".hamburger-menu",function(n){n.preventDefault(),$("html").toggleClass("nav-open")}),$(document).on("click",'[data-toggle="lightbox"]',function(n){n.preventDefault(),$(this).ekkoLightbox(),console.log("******activate lightbox")})}),console.log("---\x3e Main is loaded.");
//# sourceMappingURL=main.js.map