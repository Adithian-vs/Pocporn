// Sample video data
const videos = [
    {
      id: 1,
      title: "Sample video",
      url:"https://xnxx.health/video-rpx5p44/sex_with_stepsister",
      description: "This is a sample video.",
      likes: 0,
      dislikes: 0
    },
    // Add more video objects as needed
  ];
  // Function to add a video
  function addVideo(){
    const videoInput=document.getElementById('videoTitle').value;
    const videoDescription=
    document.getElementById('videoDescription').value;
    if(videoInput.files.length===0){
      alert('Please select a video file');
      return;
    }
    const file=videoInput.files[0];
    const videoURL=URL.createObjectURL(file);
    const newVideo={
      id: videos.length+1,
      title:videoTitle||'Video${videos.length+1}',
      url:videoURL,
      description:videoDescription||'No description provided',
      likes:0,
      dislike=0,
    };
    videos.push(newVideo);
  }
  
  // Function to display videos on the page
  function displayVideos(videoList) {
    const videoContainer = document.getElementById('videoList');
    videoContainer.innerHTML = '';
  
    videoList.forEach(video => {
      const videoCard = document.createElement('div');
      videoCard.className = 'video-card';
  
      videoCard.innerHTML = `
        <h3>${video.title}</h3>
        <video controls>
          <source src="${video.url}" type="video/mp4">
          Your browser does not support the video tag.
        </video>
        <p>${video.description}</p>
        <div class="like-dislike">
          <button class="like-btn" onclick="likeVideo(${video.id})">👍 ${video.likes}</button>
          <button class="dislike-btn" onclick="dislikeVideo(${video.id})">👎 ${video.dislikes}</button>
        </div>
      `;
  
      videoContainer.appendChild(videoCard);
    });
  }
  // Funtion to added videos display
  function displayVideos(){
    const videoList = document.getElementById('videoList');
    videoList.innerHTML='';

    videos.forEach(video => {
      const videoElement = document.createElement('div');
      videoElement.innerHTML = `
          <h3>${video.title}</h3>
          <video width="320" height="240" controls>
              <source src="${video.url}" type="video/mp4">
              Your browser does not support the video tag.
          </video>
          <p>${video.description}</p>
          <p>Likes: ${video.likes} | Dislikes: ${video.dislikes}</p>
          `;
      videoList.appendChild(videoElement);
  });

  }
  
  // Function to like a video
  function likeVideo(id) {
    const video = videos.find(v => v.id === id);
    if (video) {
      video.likes++;
      displayVideos(videos);
    }
  }
  
  // Function to dislike a video
  function dislikeVideo(id) {
    const video = videos.find(v => v.id === id);
    if (video) {
      video.dislikes++;
      displayVideos(videos);
    }
  }
  
  // Function to search for videos
  function searchVideos() {
    const searchTerm = document.getElementById('search').value.toLowerCase();
    const filteredVideos = videos.filter(video => video.title.toLowerCase().includes(searchTerm));
    displayVideos(filteredVideos);
  }
  
  // Initial call to display videos
  displayVideos(videos);
  displayVideos();
  