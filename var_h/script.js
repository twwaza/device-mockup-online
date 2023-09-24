	/* Know how you can contribute to the code: Simply go to the Github project's issue. */
		var imageLoader = document.getElementById("imageLoader");
      	imageLoader.addEventListener("change", handleImage, false);
      	var canvas = document.getElementById("imageCanvas");
      	var ctx = canvas.getContext("2d");
      	function handleImage(e) {
        var reader = new FileReader();
        reader.onload = function(event) {
        	var img = new Image();
          	img.crossOrigin = "*";
          	img.onload = function() {
            canvas.width = 1840;
            canvas.height = 3600;
            ctx.drawImage(img, 200, 200, 1440, 3200);
			
            var wm = new Image();
            wm.crossOrigin = "*";
            wm.onload = function() {
              ctx.drawImage(this, 0, 0, 1840, 3600);
              var base64 = canvas.toDataURL("image/png");
              
              var fileToSave = new Image();
              fileToSave.onload = function() {
                document.getElementById("img_div").appendChild(this);
              };
              fileToSave.src = base64;
            };
            
            wm.src =
              ".../devices/bezelless_wgray.png";
          };
        
          var_dl('project');
         
          img.src = event.target.result;
        };
        reader.readAsDataURL(e.target.files[0]);
	
document.getElementById('download').addEventListener('click', function(e) {
    // Convert our canvas to a data URL
    let canvasUrl = canvas.toDataURL();
    // Create an anchor, and set the href value to our data URL
    const createEl = document.createElement('a');
    createEl.href = canvasUrl;

    // This is the name of our downloaded file
    createEl.download = "download.png";

    // Click the download button, causing a download, and then remove it
    createEl.click();
    createEl.remove();
});


        
	}
