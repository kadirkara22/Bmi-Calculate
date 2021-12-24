import React from 'react'
import "./BmiResult.css"
const BmiResult = ({ status }) => {
    const showStatus = (status) => {
        if (status === "Zayıf") {
            return "Zayıf sınıflandırmasına giriyorsanız kilonuz olması gereken ağırlığınızın altında demektir. Düşük vücut ağırlığı saç dökülmesi, tırnak kırılması, halsizlik, yorgunluk ve baş ağrısı gibi şikayetlere neden olabilir. İdeal kiloya ulaşma sürecinde önemli olan kilo artışının hızlı olması değil; sağlıklı bir kilo artışının gerçekleşmesidir. Bu süreçte bir beslenme uzmanında yardım almanız daha sağlıklı olur."
        }
        else if (status === "Normal") {
            return "BMI değeriniz bu aralıkta ise; kilonuz boyunuza göre ideal denilebilir. İdeal vücut ağırlığında olmanız hem daha dinç ve zinde olmanızı sağlar hem de hastalıklara yakalanma riskinizi düşürür."
        }
        else if (status === "Kilolu") {
            return "BMI değerinizin bu aralıkta olması vücut ağırlığınızın boyunuza oranla yüksek olduğunu ve obezite riski taşıdığınızı gösterir. İdeal kilograma inme sürecinde hızlı kilo kaybı daha sağlıksız bir vücuda temel hazırlar. Bu süreçte hızlı kilo kaybının yerine yavaş ve kalıcı olan ağırlık kaybının sağlıklı olduğu unutulmamalıdır."
        }
        else if (status === "Şişman") {
            return "BMI değeriniz bu aralıkta ise obez sınıflandırmasına girmiş sayılırsınız ve vücut ağırlığınız olması gerekenin çok üstünde demektir. Obezite diyabet, kalp-damar hastalıkları, yüksek tansiyon, kolesterol ve kanser görülme riskini artırabilir ve yaşam kalitesini olumsuz yönde etkileyebilir. İdeal vücut ağılığına ulaşmak amacıyla hızlı kilo kaybının gerçekleşmesi kalıcı olmayan bir çözümdür ve aynı hızla ağırlık artışına neden olabilir. Bu süreçte ağırlık kaybının diyetisyen gözetiminde olması daha sağlıklı olur."
        }
        else if (status === "Aşırı Şişman") {
            return "BMI değeriniz bu aralıkta ise morbid obez sınıfındasınızdır ve sağlığınız risk altındadır. Yüksek vücut ağırlığı; diyabet, kalp-damar hastalıkları, yüksek tansiyon, yüksek kolesterol ve böbrek rahatsızlıkları gibi birçok sağlık sorununu beraberinde getirebilir. İdeal vücut ağırlığına inmeniz hem fiziksel hem de psikolojik açıdan daha sağlıklı olmanızı sağlar ve yaşam kalitenizi artırır. BMI değeriniz bu aralıkta ise mutlaka kan değerlerinize baktırmalısınız ve bir uzmana başvurmalısınız."
        }
    }


    return (
        <div className="showStatus">
            {showStatus(status)}

        </div>
    )
}

export default BmiResult
