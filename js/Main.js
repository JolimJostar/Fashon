

if ($(window).width() > 600) {

    $(".SearchBarHolder").removeClass("Hidden")

    $(document).scroll(function() {


        FullID = document.getElementById("HeaderFull");
        FoldedID = document.getElementById("HeaderFolded")
    
        var myScrollFunc = function () {
            var y = window.scrollY;
            if (y >= 214) {
                FullID.className = "HeaderFull Hide"
                FoldedID.className = "HeaderFolded Show"
            } else {
                FullID.className = "HeaderFull Show"
                FoldedID.className = "HeaderFolded Hide"
            }
        };
    
        window.addEventListener("scroll", myScrollFunc);
    });
    
 }
 else 
 {
    
    $(".btnFooter").click(function(){
        if ($(this).siblings().first().hasClass("Unactive")){  
            $(this).siblings().first().removeClass("Unactive")
        } else {
            $(this).siblings().first().addClass("Unactive")
        }
    })
    
    
    
    active = false
    
    $("#Burger").click(function(){
        if (active){
            $(".SearchBarHolder").addClass("Hidden")
            $(".MenuPhone").addClass('Hide')
            $('.Menu').removeClass("Hidden")
            $('#Logo').removeClass("Hidden")
            active = !active
        } else {
            $(".SearchBarHolder").removeClass("Hidden")
            $(".MenuPhone").removeClass('Hide')
            $('.Menu').addClass("Hidden")
            $('#Logo').addClass("Hidden")
            active = !active
        }
    })
    
 }

