document.addEventListener('DOMContentLoaded', () => {
    
    // LOGICA DE NAVEGAÇÃO (SPA)
    const links = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.tab-content');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Remove a classe ativa de todos os links e seções
            links.forEach(l => l.classList.remove('active'));
            sections.forEach(s => s.classList.remove('active'));

            // Adiciona classe ativa no link clicado
            link.classList.add('active');
            
            // Mostra a seção correspondente
            const targetId = link.getAttribute('data-target');
            document.getElementById(targetId).classList.add('active');
        });
    });

    // LÓGICA DA CALCULADORA ECOEFICIENTE
    const calcForm = document.getElementById('ecoCalc');
    const resultadoCalc = document.getElementById('resultadoCalc');

    calcForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const tamanho = parseFloat(document.getElementById('tamanho').value);
        const cultura = document.getElementById('cultura').value;
        
        let sugestaoAgua = "";
        let sugestaoBio = "";

        // Lógica baseada na cultura escolhida
        if (cultura === 'graos') {
            sugestaoAgua = "Uso de plantio direto para manter a umidade do solo e reduzir a necessidade de irrigação.";
            sugestaoBio = "Aplicação de inoculantes biológicos para fixação de Nitrogênio, reduzindo adubos químicos.";
        } else if (cultura === 'hortifruti') {
            sugestaoAgua = "Instalação de sistema de irrigação por gotejamento localizado, reduzindo o consumo de água em até 50%.";
            sugestaoBio = "Uso de bioinseticidas à base de Neem ou Bacillus thuringiensis para controle de pragas.";
        } else if (cultura === 'fruticultura') {
            sugestaoAgua = "Manejo via sensores de umidade de solo para irrigar apenas quando a planta atingir o estresse hídrico ideal.";
            sugestaoBio = "Uso de adubação verde nas entrelinhas para melhorar a biologia e nutrição do solo.";
        }

        // Ajuste com base no tamanho da propriedade
        let contextoPropriedade = tamanho < 10 
            ? `Para sua propriedade de pequeno porte (${tamanho} ha), estas soluções são de baixo custo e alta eficiência:` 
            : `Para sua propriedade de médio/grande porte (${tamanho} ha), recomendamos automação no manejo:`;

        // Renderiza o resultado na tela
        resultadoCalc.innerHTML = `
            <h4>📋 Diagnóstico de Práticas Recomendadas:</h4>
            <p style="margin: 0.5rem 0; font-size: 0.95rem; color: #555;">${contextoPropriedade}</p>
            <p>💧 <strong>Economia de Água:</strong> ${sugestaoAgua}</p>
            <p style="margin-top: 0.5rem;">🍃 <strong>Uso de Bioinsumos:</strong> ${sugestaoBio}</p>
        `;
        
        resultadoCalc.classList.remove('hidden');
    });
});
