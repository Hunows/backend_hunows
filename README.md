# Hunows - API Restful

<h2>:computer: O que é o Hunows?</h2>

<p>
O Hunows é uma API Restful onde pessoas podem se cadastrar, publicar perguntas, receber respostas, publicar respostas em outras perguntas. Em geral, é um fórum semelhante ao fórum da Alura, GUJ, Quora ou StackOverflow. Dado este contexto, implemente as funcionalidades a seguir. </p> 

<h3><b>:small_orange_diamond: Cadastro de usuários: </b></h3>
<p>Deve ser possível que qualquer pessoa possa se cadastrar usando um nome, e-mail e senha. O sistema deve registrar a cada do cadastro do usuário no formato e validar as seguintes regras:

<ol>
<li>O nome não pode ser vazio.</li>
<li>O e-mail precisa ser um e-mail válido.</li>
<li>A senha não pode ter menos de 6 caracteres.</li>
</ol>
</p>

<h3><b>:small_orange_diamond: Publicar perguntas: </b></h3>
<p>Um usuário cadastrado deve conseguir publicar uma pergunta. Este usuário precisa estar autenticado para conseguir realizar essa operação. Uma pergunta para ser cadastrada precisa informar as seguintes informações:
<ol>
<li>Um título que não pode ser vazio e deve ter no máximo 250 caracteres.</li>
<li>Um corpo, que é um campo que pode ter até 5000 caracteres onde o usuário pode expor mais contexto e informações sobre a pergunta.</li>
<li>Uma lista de palavras chaves sobre os assuntos que estão relacionados com a pergunta que deve ter pelo menos um item.</li>
</ol>
</p>

<h3><b>:small_orange_diamond: Responder perguntas:</b></h3>
<p>Qualquer pessoa na internet deve conseguir visualizar perguntas e respostas para estas perguntas. Deve ser possível visualizar a pergunta, quem perguntou, as respostas e quem respondeu, as palavras chaves da pergunta e quando essas perguntas e respostas foram publicadas. Porém, para pessoas cadastradas e autenticadas, deve ser possível publicar uma resposta para uma pergunta. Para responder uma pergunta o usuário deve fornecer:
<ol>
<li>Um texto obrigatório que pode ter até 5000 caracteres.</li>
</ol>
</p>

<h3><b>:small_orange_diamond: Marcar resposta como solução: </b></h3>
<p>Um usuário pode marcar como solução de sua pergunta, uma resposta enviada para a mesma. </p>

<h2> Projeto desenvolvido por: </h2>

<p> Fernanda Oliveira, Jessica Santos, Natalia Melo, Nicoli Barreto e Samara Silva.
<p><b> Aceleração de desenvolvimento Level Up Alura | NxtDevs </p></b> 
