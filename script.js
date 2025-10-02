// 모바일 메뉴 토글 기능
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navMenu = document.querySelector('nav ul');

mobileMenuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('show');
});

// 스크롤 시 헤더 스타일 변경
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// 스무스 스크롤 기능
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        // 모바일 메뉴가 열려있으면 닫기
        if (navMenu.classList.contains('show')) {
            navMenu.classList.remove('show');
        }
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});

// 문의 폼 제출 처리
const inquiryForm = document.getElementById('inquiryForm');

if (inquiryForm) {
    inquiryForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // 폼 데이터 수집
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            message: document.getElementById('message').value
        };
        
        // 여기서는 실제 서버로 데이터를 보내는 대신 알림 표시
        alert('문의가 접수되었습니다. 빠른 시일 내에 답변 드리겠습니다.');
        inquiryForm.reset();
        
        // 실제 구현 시에는 아래와 같이 서버로 데이터 전송
        /*
        fetch('your-server-endpoint', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
            alert('문의가 접수되었습니다. 빠른 시일 내에 답변 드리겠습니다.');
            inquiryForm.reset();
        })
        .catch(error => {
            console.error('Error:', error);
            alert('문의 접수 중 오류가 발생했습니다. 다시 시도해주세요.');
        });
        */
    });
}

// 애니메이션 효과
function animateOnScroll() {
    const elements = document.querySelectorAll('.value-item, .service-item, .edu-item, .patent-item, .timeline-item, .client-item');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementPosition < windowHeight - 100) {
            element.classList.add('animate');
        }
    });
}

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// 모바일 메뉴 스타일 추가
document.head.insertAdjacentHTML('beforeend', `
    <style>
        nav ul.show {
            display: flex;
            flex-direction: column;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background-color: white;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            padding: 20px;
            z-index: 1000;
        }
        
        nav ul.show li {
            margin: 10px 0;
        }
        
        header.scrolled {
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        }
        
        .animate {
            animation: fadeInUp 0.6s ease forwards;
        }
        
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    </style>
`);