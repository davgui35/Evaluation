$(document).ready(function(){
    var width = $('#container').width();
    console.log(width);//recupere la largeur
    // la mettre aussi dans height
    $('#container div').height(width);

    $('.onglets')
    	// Variables contenant l'ensemble des liens du menu par onglet :
        var $ongletItems = $(".onglets li") ;
    
		
		
		$ongletItems.click(function(){
			
			// On enl�ve la classe sur tous les items
			$ongletItems.removeClass("active") ;
			
			// On met la classe active sur l'item qui a �t� cliqu�
			$(this).addClass("active") ;
			
			// Annule l'action par d�faut
			return false ;
			
        });
        //console.log($ongletItems);
        // Je stocke mes sections et je les cache
        $sections = $("section").css("display","none") 
        //console.log($sections);
        
        $($ongletItems).click(function(){
           var $clicked = $(this);
            //Cacher mes sections
            $sections.css('display', 'none');
            
            var selecteur = $clicked.attr('href');
            console.log(selecteur);
			
            $ongletItems.filter(selecteur).css("display","block") ;
            
            //affiche le selecteur
            $($sections).css('display', 'block');

            $($onglet_clicke.css('display', 'block');
            return false;
        });
   
		// Afficher par d�faut le premier tableau en simulant un clique sur le premier item
        $ongletItems.eq(0).click() ;
        

        //Video

        var titre = $('li');
        var links = $('#lien-videos');
        
        $(links).click(function(){
            var $click = $(this);
            //Cacher mes sections
            $links.css('display', 'none');
           
            var selecteur = $click.attr('href');
            console.log(selecteur);
        });
          


        // loupe
        
		var $loupe = $("<div id=\"loupe\"></div>").css("display","none").appendTo($("#table-container"));
		$('#loupe').hide();

                $("td").hover(
            // La souris arrive sur l’élément
            function(){
            $('#loupe').show().text($(this).text());
            $(this).addClass("pseudo-hover") ;
            },
            // La souris quitte l’élément
            function(){
            $('#loupe').hide().text($(this).text());
            $(this).removeClass("pseudo-hover") ;
            }
            )
	


});