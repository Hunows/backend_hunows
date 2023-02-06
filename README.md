# backend_hunows

O Hunows é uma API Restful onde pessoas podem se cadastrar, publicar perguntas, receber respostas, publicar respostas em outras perguntas. Em geral, é um fórum semelhante ao fórum da Alura, GUJ, Quora ou StackOverflow. Dado este contexto, implemente as funcionalidades a seguir.

Cadastro de usuários: Deve ser possível que qualquer pessoa possa se cadastrar usando um nome, e-mail e senha. O sistema deve registrar a cada do cadastro do usuário no formato e validar as seguintes regras:
-O nome não pode ser vazio.
-O e-mail precisa ser um e-mail válido.
-A senha não pode ter menos de 6 caracteres.


Publicar perguntas: Um usuário cadastrado deve conseguir publicar uma pergunta. Este usuário precisa estar autenticado para conseguir realizar essa operação. Uma pergunta para ser cadastrada precisa informar as seguintes informações:
Um título que não pode ser vazio e deve ter no máximo 250 caracteres.
Um corpo, que é um campo que pode ter até 5000 caracteres onde o usuário pode expor mais contexto e informações sobre a pergunta.
Uma lista de palavras chaves sobre os assuntos que estão relacionados com a pergunta que deve ter pelo menos um item.


Responder perguntas: Qualquer pessoa na internet deve conseguir visualizar perguntas e respostas para estas perguntas. Deve ser possível visualizar a pergunta, quem perguntou, as respostas e quem respondeu, as palavras chaves da pergunta e quando essas perguntas e respostas foram publicadas. Porém, para pessoas cadastradas e autenticadas, deve ser possível publicar uma resposta para uma pergunta. Para responder uma pergunta o usuário deve fornecer:
Um texto obrigatório que pode ter até 5000 caracteres.


Marcar resposta como solução: Um usuário pode marcar como solução de sua pergunta, uma resposta enviada para a mesma. 
