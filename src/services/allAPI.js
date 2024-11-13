import commonAPI from "./commonAPI";
import SERVER_URL from "./server_url";

// save video
// save video api call by add.jsx

export const  addVideo=async(video)=>{

  return await  commonAPI("POST",`${SERVER_URL}/allVideos`,video)
}

//fetch video api call

 export const getAllVideos=async()=>{
  return await  commonAPI("GET",`${SERVER_URL}/allVideos`,"")

}

//api call for deleting video card


export const deleteVideos=async(videoId)=>{
  return await  commonAPI("DELETE",`${SERVER_URL}/allVideos/${videoId}`,{})

}

//post video history

export const  saveHistory=async(video)=>{

  return await  commonAPI("POST",`${SERVER_URL}/history`,video)
}

//fetch history

export const getHistory=async()=>{
  return await  commonAPI("GET",`${SERVER_URL}/history`,"")

}

//delete history

export const deleteHistory=async(videoId)=>{
  return await  commonAPI("DELETE",`${SERVER_URL}/history/${videoId}`,{})

}

//adding category

export const  addCategory=async(categoryDetails)=>{

  return await  commonAPI("POST",`${SERVER_URL}/allCategory`,categoryDetails)
}

//api call for get category

export const getAllCategory=async()=>{
  return await  commonAPI("GET",`${SERVER_URL}/allCategory`,"")

}

//api call for delete category

export const deleteCategory=async(categoryId)=>{
  return await  commonAPI("DELETE",`${SERVER_URL}/allCategory/${categoryId}`,{})

}
