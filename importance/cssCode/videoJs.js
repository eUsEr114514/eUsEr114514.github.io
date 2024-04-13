// 点赞函数
function like() {
    // 获取当前点赞次数
    let currentLikeCount = parseInt(document.getElementById('likeCount').textContent) || 0;
    // 增加点赞次数
    currentLikeCount++;
    // 更新按钮中显示的点赞次数
    document.getElementById('likeCount').textContent = currentLikeCount;
}

// 为点赞按钮添加点击事件监听器
document.getElementById('likeButton').addEventListener('click', like);