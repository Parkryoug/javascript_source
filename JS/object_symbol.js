        // 객체 리터럴(Object Literal)

        var info = {
            subject : 'css', // 속성 : 속성값,
            credit : 1,
            printOut : function(){
                return info.subject + ', ' + info.credit + '학점'; //css, 1학점
                // 객체.속성 또는 객체.메서드
            }
        }

        info.days = 20; // 객체 리터럴 속성 추가
        delete info.credit; // 객체 리터럴 속성 삭제

        info.printOut = function(){ // 객체 리터럴 속성 변경
            return this.subject + ', ' + this.days + '일';
        }// this는 자기 자신을 호출할때만 가능
        document.write(info.printOut()) // css, 20일

        //symbol(심볼) 데이터 : ECMAScript 2015(ES6)에서 새로 추가된 원시 데이터 타입으로 유일한 식별자를 의미합니다. 심볼 데이터의 속성명은 '[]' 로 표현합니다.
        
        var subjectName = symbol();
        var test = {
            [subjectName] : '자바스크립트', // [ ] 심볼 데이터의 속성명 표현
            subjectName : '제이쿼리'
        }
        document.write(test[subjectName] + ', ' + test.subjectName); // 자바스크립트, 제이쿼리
