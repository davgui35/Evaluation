$(document).ready(function(){
    var width = $('#container').width();
    console.log(width);//recupere la largeur
    // la mettre aussi dans height
    $('#container div').height(width);

    $('#table')
    	// Variables contenant l'ensemble des liens du menu par onglet :
        var $ongletItems = $(".onglets li") ;
    
		
		// Fonction d�clench�es quand on clique sur l'un de ces items
		$ongletItems.click(function(){
			
			// On enl�ve la classe sur tous les items
			$ongletItems.removeClass("active") ;
			
			// On met la classe active sur l'item qui a �t� cliqu�
			$(this).addClass("active") ;
			
			// Annule l'action par d�faut
			return false ;
			
        });
        console.log($ongletItems);
        // Je stocke mes sections et je les cache
        //$sections = $("section").css("display","none") 
        console.log($sections);
		
   
		
});