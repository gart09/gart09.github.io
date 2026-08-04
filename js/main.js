// main.js

document.addEventListener('DOMContentLoaded', () => {
    // 부드러운 스크롤 효과
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // 이미지 모달 기능 (프로필 사진 및 프로젝트 사진)
    const modal = document.getElementById('image-modal');
    const modalImg = document.getElementById('modal-img');
    const closeBtn = document.querySelector('.close-modal');
    
    // 클릭 가능한 모든 이미지 선택
    const images = document.querySelectorAll('.project-image, .profile-photo');
    
    images.forEach(img => {
        img.addEventListener('click', function() {
            modal.classList.add('show');
            modalImg.src = this.src;
        });
    });
    
    // 닫기 버튼 클릭 시 모달 닫기
    closeBtn.addEventListener('click', () => {
        modal.classList.remove('show');
    });
    
    // 모달 배경 클릭 시 모달 닫기
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('show');
        }
    });

    // ESC 키 누를 때 모달 닫기
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('show')) {
            modal.classList.remove('show');
        }
    });
});
