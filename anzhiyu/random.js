var posts=["2024/12/22/post-title/","2024/12/22/一口气看完经典历史神剧《大明王朝1566》/","2024/12/22/一口氣看完【清潭國際高中】1~10集完整版 全集電視劇解說，窮學生來到貴族學校。爲了錢全脫了，便宜了渣男/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };