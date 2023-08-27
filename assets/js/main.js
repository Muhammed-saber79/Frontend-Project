$(document).ready(function() {
    $(".circle").click(function() {
        // Remove "active" class from all circles and lines
        $(".circle, .line").removeClass("active");
        
        // Add "active" class to clicked circle and its associated line
        $(this).addClass("active");
        $(this).next(".line").addClass("active");
        
        // Get the target content ID and show it while hiding other content
        var targetContent = "#" + $(this).data("target");
        $(targetContent).fadeIn(); // Show target content

        // Toggle visibility of paragraph based on the active circle
        $(".content_circle p").hide(); // Hide all paragraphs
        $(targetContent).find("p").toggle(); // Toggle paragraph of the target content
    });
});




