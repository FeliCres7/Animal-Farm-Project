// scripts.js
document.getElementById('timelineButton').addEventListener('click', function() {
    const content = document.getElementById('timelineContent');
    content.classList.remove('hidden');
    content.classList.add('visible');
});

function hideTimeline() {
    const content = document.getElementById('timelineContent');
    content.classList.remove('visible');
    content.classList.add('hidden');
}
