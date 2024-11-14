(function(window) {
    window.env = window.env || {};
  
    // Environment variables    
    window["env"]["origin"] = "${origin}";
    window["env"]["baseUrl"] = "${baseUrl}";
    window["env"]["baseAuthUrl"] = "${baseAuthUrl}";    
    window["env"]["baseUrlUbigeo"] = "${baseUrlUbigeo}";
    window["env"]["API_KEY"] = "${API_KEY}";
    window["env"]["debug"] = true;
  })(this);