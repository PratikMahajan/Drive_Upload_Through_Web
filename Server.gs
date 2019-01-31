
function doGet(e) {
  return HtmlService.createHtmlOutputFromFile('form.html');
}


function firstToUpperCase( str ) {
    return str.substr(0, 1).toUpperCase() + str.substr(1);
}

function uploadFiles(form) {
  
  try {
    
    var dropbox = "DirectWebUploads";
    var folder ,pfolder,vfolder,ofolder, folders = DriveApp.getFoldersByName(dropbox);
    
    
    if (folders.hasNext()) {
      folder = folders.next();
    } else {
      folder = DriveApp.createFolder(dropbox);
    }
    
    
    var fileFolder=folder.getFoldersByName(form.myName);
    if(fileFolder.hasNext()){
      folderimg=fileFolder.next()
    }else{
      folderimg=folder.createFolder(form.myName)
    }
    
    
    
 
    
    var blob = form.myFile;    
    var file = folderimg.createFile(blob);    
    var someshit="FileName:"+file.getName()+"<br> Size:"+(file.getSize())/1024+"kb<br> In Folder:"+form.myName+"<br>";
    
    file.setDescription(""+firstToUpperCase(form.myName2)+"\n About:"+firstToUpperCase(form.myName3));
        
    return "<center><h1>File uploaded successfully</h1><br>"+someshit+"</center> "// + file.getUrl();
    
  } catch (error) {
    
    return error.toString();
  }
  
}


