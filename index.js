var questtt="";let n={"Какие парадигмы Python не поддерживает?":"логическое","(')":"str (строка)\xa0","( , ')":"это синтаксическая ошибка\xa0","[ ']":"list (список)\xa0","(r'в')":"str (строка)\xa0","(0 < [1, 4][1] < 3) + 1":"1","0 < [1, 4][1] < 3 or None":"None","0 < [1, 4][1] < 3 and None":"False","0 < [1, 4], [1] < 3":"True, False","(0 < 5 <= 3) and (0 / 0)":"False","Какие виды модулей есть в Python?":"обычные","Что произойдет при повторном импорте модуля (в том же блоке кода) оператором import?":"почти","Какие встроенные функции служат для работы с атрибутами объекта?":"hasattr(), getattr(), setattr(), delattr()","Что обычно делается для возврата более одного значения из функции?":"возвращается","В каком модуле нужно искать функции, помогающие тестировать программу?":"unittest","Что делает функция os.unlink()?":"удаляет файл\xa0","Что делает функция  time.strftime()?":"форматирует значение даты и времени в соответствии с заданным форматом","Для чего нужны функции модуля gettext?":"обеспечения","Как мог бы называться стандартный модуль Python для работы с протоколом IMAP?":"imaplib","Что такое os.environ?":"словарь","Получен новый пакет (в виде исходных кодов) для Python. Какова рекомендуемая процедура установки нового модуля, если известно, что он использует distutils?":"в каталоге","Какая встроенная функция Python лучше всего подходит для цепочечных вычислений (в частности, вычислений значения многочлена по схеме Горнера)?":"reduce()","Карринг  —  это...":"получение","В каких местах допущены ошибки в генераторном выражении, выдающем список координат полей шахматной доски? (j+str(i) for i in xrange(1, 9) for j in 'abcdefgh')":"ошибок нет\xa0","Что представляет собой объектно-ориентированная программа с точки зрения теории ООП?":"набор объектов, которые посылают друг другу сообщения","Разбиение программы на объекты называется:":"декомпозицией","Сокрытие информации о внутреннем устройстве объекта, при котором вся работа с объектом ведется только через общедоступный интерфейс называется":"инкапсуляцией","Даны матрицы a и b. Как получить произведение матриц?":"dot(a, b)\xa0","Даны матрицы a и b. Как получить поэлементное произведение матриц?":"a * b\xa0","Какие кодировки исходного текста программы поддерживает интерпретатор Python?":"большинство","Как задается кодировка исходного текста Python-программы?":"специального","Какие кодировки используются для внутреннего представления символов строк?":"строки с восьмибитовыми символами и Unicode (2- или 4-байтовые символы)\xa0","Какой длины строки можно использовать в Python?":"длина строк ограничивается имеющейся памятью","Что такое регулярное выражение?":"шаблон, описывающий множество строк","Каким из приведенных ниже способов можно убрать из строки s пробельные символы слева и справа?":"string.strip(s)","Каким из приведенных ниже способов можно привести латинские символы строки s к нижнему регистру?":"s.lower()","Как перевести Unicode-строку u в кодировку koi8-r?":"u.encode('koi8-r')","С помощью какого регулярного выражения можно найти все (ровно) пятикратные повторения цифры 0?":"([^0]|\\A)0{5}([^0]|\\Z)","С помощью какого регулярного выражения можно найти все (ровно) пятикратные повторения цифры 0?":"([^0]|\\A)0{5}([^0]|\\Z)\xa0","Какое из приведенных ниже регулярных выражений некорректно?":"a+b++","Какое множество строк описывает регулярное выражение [ac][ab]?":"'aa', 'ab', 'ca', 'cb'","На что влияет флаг re.MULTILINE в регулярном выражении?":"знаки\xa0^\xa0и\xa0$\xa0соответствуют началу и концу любой строки в заданном тексте, а не только началу и концу текста\xa0","Для чего в регулярном выражении используется '\\w'?":"для обозначения буквы или цифры","Каков синтаксис для 'заглядывания вперед' в регулярных выражениях, доступных в Python?":"(?=регвыр)\xa0","В пакете email для чтения и записи поля сообщения используется синтаксис:":"доступа к элементу словаря","С помощью какого класса из какого модуля пакета email можно вложить в сообщение бинарный файл?":"модуль\xa0MIMEBase, класс\xa0MIMEBase","Какой класс из какого модуля пакета email служит для вложения в сообщение другого сообщения?":"модуль\xa0MIMEMessage, класс\xa0MIMEMessage\xa0","Как можно получить список полей сообщения msg?":"msg.keys()","С помощью какого метода можно последовательно пройти все части сообщения msg?":"msg.walk()","Какой метод больше подходит для обработки XML, если при этом происходит нелинейное изменение структуры XML-документа?":"DOM","Можно ли в XML использовать собственные теги?":"можно","Зачем в XML пространства имен?":"для сочетания в одном документе XML с различными DTD\xa0","Что делает метод normalize() DOM-объекта?":"сводит воедино все идущие подряд текстовые узлы","Какие методы позволяют получить атрибут DOM-узла?":"getAttribute() и getAttributeNode()","Как передаются CGI-сценарию данные из формы методом POST?":"стандартный","Как передаются CGI-сценарию данные из формы методом GET?":"переменные","Как получить в CGI-сценарии содержимое файла, переданного web-серверу через форму?":"атрибут\xa0file","Что происходит при аварийном завершении CGI-сценария (например, при работе с web-сервером Apache)?":"Internal Server Error","В какой переменной окружения передается метод запроса (GET, POST и т.п.)?":"REQUEST_METHOD","В какой переменной окружения передается имя пользователя (если применяется авторизация)?":"REMOTE_USER","С помощью какой функции можно подготовить текст для вывода в HTML? ":"cgi.escape()\xa0","Как обработчик mod_python получает информацию о запросе?":"в виде","Как обработчик mod_python передает ответ на запрос?":"посредством","Как в одном Python-сценарии можно задать несколько различных обработчиков mod_python?":"функциях","Какой из перечисленных обработчиков mod_python выполняется раньше других?":"PythonPostReadRequestHandler","Какой из перечисленных обработчиков mod_python выполняется раньше других?":"PythonPostReadRequestHandler","К какому уровню модели взаимодействия открытых систем относится протокол IP?":"сетевому","К какому уровню модели взаимодействия открытых систем относится протокол TCP?":"транспортному","К какому уровню модели взаимодействия открытых систем относится протокол HTTP?":"приложений","К какому уровню модели взаимодействия открытых систем относится протокол FTP?":"приложений","К какому уровню модели взаимодействия открытых систем относится протокол UDP?":"транспортному","Какой модуль стандартной библиотеки Python позволяет работать с WWW на более низком уровне?":"httplib","Какой модуль стандартной библиотеки Python обеспечивает большую, чем urllib, дополнительную высокоуровневую функциональность при работе с WWW?":"urllib2","Какова структура URL согласно RFC 2396?":"scheme://netloc/path;parameters?query#fragment\xa0","Чему будет равен результат выполнения urlparse.urlsplit('http'://google.com/search?q=Python#1')?":"('http', 'google.com', '/search', 'q=Python', '1')\xa0","Какое значение threadsafety соответствует ситуации, когда потоки могут одновременно использовать как DB-API 2.0 совместимый модуль, так и соединения, получаемые на основе этого модуля":"2\xa0","Какое значение threadsafety соответствует ситуации, когда DB-API 2.0 модуль не поддерживает потоки":"0","Какое значение threadsafety соответствует ситуации, когда потоки могут одновременно использовать DB-API 2.0 совместимый модуль, но не соединения, получаемые на основе этого модуля":"1","Для чего применяется метод fetchone() объекта-курсора?":"для получения следующей записи результата запроса\xa0","Для чего применяется метод nextset() объекта-курсора?":"для перехода к следующему набору записей результата запроса","Что передается методу executemany() объекта-курсора вторым параметром (дайте наиболее подходящий ответ)?":"последовательность","Какое исключение должно быть возбуждено DB-API 2.0-совместимым модулем при сбое в соединении с базой данных?":"OperationalError","Какое исключение должно быть возбуждено DB-API 2.0-совместимым модулем при ошибке в синтаксисе SQL-запроса?":"ProgrammingError","Какое исключение должно быть возбуждено DB-API 2.0-совместимым модулем при ошибке - нарушении целостности базы данных?":"IntegrityError","Какое исключение объединяет исключения, относящие к ошибкам обработки данных, синтаксиса SQL, сбоя соединения с СУБД, нарушения целостности базы данных и т.п.?":"DatabaseError","Как можно получить список активных на данный момент потоков?":"threading.enumerate()","Предположим, что поток A должен ждать завершения потока B. Как этого добиться?":"в потоке\xa0A: B.join()","Z будет использоваться в рекурсивной функции в каждом рекурсивном вызове. Какой класс выбрать для него?":"RLock","Экземпляры какого класса сочетают замок и средство коммуникации между потоками?":"Condition","Какой класс Tkinter соответствует виджету для поля ввода?":"Entry","Какой класс Tkinter соответствует виджету для надписи?":"Label","Какой класс Tkinter соответствует виджету для вывода графических примитивов?":"Canvas","Какой класс Tkinter соответствует кнопке для представления одного из альтернативных значений?":"Radiobutton","Какой класс Tkinter соответствует кнопке для представления многострочного текста (без возможности редактирования)?":"Message","Какой шаблон можно использовать для события, при котором клавиша F5 нажимается при нажатой клавише Shift?":"<Shift-F5>","Какой шаблон можно использовать для события — тройного щелчка правой кнопкой мыши?":"<Triple-B3>\xa0","Какие функции выполняет Pyrex?":"создает файлы на C/C++ из файлов на Pyrex","Насколько полно C API Python охватывает средства языка Python?":"практически","С помощью какого макроса удобнее всего определить строку документации при использовании C API?":"PyDoc_STRVAR","Какой макрос уменьшает счетчик ссылок объекта на единицу?":"Py_DECREF","Какие из следующих программ (модулей) лучше написать в виде модулей расширения на языке более низкого уровня, чем Python?":"преобразование","В каких из перечисленных ниже случаев удобнее встроить интерпретатор Python в программную систему?":"требуется","Какие из приведенных ниже сравнений могут дать True, если объекты x  и y имеют разные значения?":"ни один\xa0","С помощью функций какого модуля проще всего исследовать содержимое стека при обработке исключения в части except?":"traceback","Какой модуль содержит функции для построения деревьев синтаксического разбора?":"parser","Как средствами самого Python определить имена формальных аргументов функции func(), если известно, что функция написана на Python? ":"inspect.getargspec(func)\xa0","Какое из следующих выражений дает файл и номер строки, из которой вызвана функция, содержащая выражение?":"traceback.extract_stack()[-2][:2]\xa0","Как начать интерактивную отладку функции f с двумя аргументами (условно: x и y)?":"import pdb; pdb.runcall(f, x, y)\xa0","Имеется кортеж вида T=(4, 2, 3). Какая из операций приведет к тому, что имя Т будет ссылаться на кортеж (1, 2, 3)?":"T=(1,)+T[1:] ","Конструктор класса задается методом с именем:":"__init__","Если в классе определен деструктор с двумя и более параметрами, то:":"предупреждения","Если в классе определены два метода с одинаковыми именами и разными списками параметров, то:":"не будет сгенерировано ни предупреждения, ни ошибки; второе определение заменит первое\xa0","В языке Python объектами являются:":"все","Деструктор класса задается методом с именем:":"__del__","В языке Python доступ через instance._class__attribute:":"запрещен","В языке Python доступ через instance.attribute разрешен к любым атрибутам кроме:":"атрибутов, имена которых начинаются на двойное подчеркивание и кончаются не на подчеркивание","В языке Python доступ через instance._class__attribute разрешен к:":"атрибутам, имена которых начинаются на двойное подчеркивание и кончаются не на подчеркивание","В языке Python инкапсуляция достигается:":"путем соглашения между программистами об условном обозначении закрытых и открытых данных и полей","В языке Python прямой доступ:":"разрешен к любым атрибутам","В языке Python доступ через instance.attribute:":"разрешен к любым атрибутам, кроме атрибутов со специальными именами\xa0","Встроенный метод __setattr__ вызывается:":"автоматически,при попытке присвоить значение атрибута через\xa0instance.attribute\xa0или\xa0instance._class__attribute\xa0","Встроенный метод __delattr__ вызывается:":"автоматически, при попытке удалить атрибут через\xa0instance.attribute\xa0или\xa0instance._class__attribute","Одиночное подчеркивание в начале имени атрибута класса указывает на:":"в случае","Прямой доступ к атрибуту класса нельзя получить, если:":"в языке\xa0","В языке Python встроенный метод property() используется для:":"к определенному","Встроенный метод __getattr__ вызывается:":"\xa0при попытке получить значение атрибута через\xa0instance.attribute\xa0или\xa0instance._class__attribute, если не найден атрибут, к которому идет обращение\xa0","Встроенный атрибут __mro__ в языке Python:":"возвращает порядок разрешения методов, но не позволяет его изменять\xa0","При наследовании в языке Python порядок разрешения методов для 'новых' классов (т.е. классов, наследников класса object) определяется следующим образом:":"рассматривается первый суперкласс, если метод не найден, то рассматривается второй суперкласс и т.д., если во всех суперклассах метод не найден, то рассматривается суперклассы первого суперкласса и т.д. \xa0","При наследовании в языке Python порядок разрешения методов для 'классических' классов (т.е. классов, не являющихся наследниками класса object) определяется следующим образом:":"рассматривается первый суперкласс и далее его суперклассы, если метод не найден, то рассматривается второй суперкласс\xa0","При наследовании в языке Python:":"подклассы наследуют все методы суперкласса\xa0","При наследовании в языке Python приватные методы:":"наследуются и доступны только через\xa0instance._parent__method()","При наследовании в языке Python:":"подклассы наследуют все атрибуты суперкласса\xa0","В языке Python метод является абстрактным, если:":"если он помечен как\xa0@abstractmethod","Исключение NotImplementedError используется для:":"что некоторый","Проверка на совместимость типов производится с помощью оператора":"isinstance","Положительный результат выполнения проверки на совместимость типов оператором isinstance означает, что":"либо","Чем отличаются в языке Python обычные модули от модулей расширения?":"способом","В языке Python при импортировании пакета, если файл __init__.py отсутствует, то:":"выдана ошибка","Чем отличаются файлы *.py от файлов *.pyc:":"*.pyc\xa0- это откомпилированные файлы\xa0*.py\xa0","В языке Python модулем называют:":"файл, содержащий определения и другие инструкции на каком-либо языке программирования","В языке Python пакетом называют:":"структурированных","В языке Python при импортировании модуля с помощью инструкции import M:":"в текущее пространство имен добавляется только имя модуля \xa0","При импортировании модуля если в пространстве имен уже существует имя импортированного модуля, то:":"только в случае","Встроенный атрибут объекта модуля __dict__:":"позволяет менять","В языке Python при импортировании модуля с помощью инструкции from .. import *:":"в текущее пространство имен добавляется имена всех его переменных, не начинающихся с подчеркивания. Имя модуля не добавляется\xa0","В языке Python встроенная функция dir() без аргументов используется для:":"списка всех имен","Встроенный атрибут объекта модуля __dict__ содержит:":"всех имен модуля","Встроенный атрибут объекта модуля __name__:":"содержит имя модуля и может быть изменен","При попытке повторной сериализации объектов:":"но повторная","При десериализации объекта произвольного класса конструктор класса:":"обычно","Модули Pickle и cPickle сериализуют данные в формат:":"по выбору\xa0","Методы класса содержатся в пространстве имен:":"класса и экземпляров класса","Метакласс М для класса C можно задать следующим образом:":"наследовать класс\xa0C\xa0от\xa0metaclass=M","Метакласс - это:":"класс, объекты которого являются классами","Метаклассами являются следующие встроенные классы:":"type","Методы, определенные в метаклассе содержатся в пространстве имен:":"метакласса и класса","Как получить данные от пользователя?":"Использовать метод input()","S = '\n123'":"4","Какая библиотека отвечает за время?":"time","Сколько библиотек можно импортировать в один проект?":"Неограниченное количество","Как вывести список методов и атрибутов объекта x?":"dir(x)","Какая функция выводит что-либо в консоль?":"print();","Где правильно создана переменная?":"num = float(2","Привести переменную x к типу числа с плавающей точкой можно следующим способом:":"никаким","Тип переменной во время выполнения скрипта определяется по следующим правилам:":"тип переменной изменяется при присваивании, но не может изменяться в зависимости от контекста использования этой переменной","Из приведенных ниже высказываний укажите истинное:":"перед использованием переменной она должна быть инициализирована каким-либо значением\xa0","В языке Python существуют следующие арифметические операции:":"деление по модулю (\xa0%\xa0)\xa0","Для контроля над выполнением условного ветвления (if) можно использовать:":"elif","В языке Python циклом с предусловием является:":"while","Инструкция for в языке Python:":"перебирает любую последовательность в порядке следования элементов","При реализации блока ветвления if в языке Python можно использовать следующие ключевые слова:":"elif–","Сколько элементов будет содержать словарь D (то есть, чему будет равно len(D)) после выполнения следующего кода: D = {} D[1], D[2], D[3] = 'ABB' D[0], D[1] = 'AB' ":"4","Что выведет следующая программа: S = 0 for i in range(1, 10):   for j in range(1, 3):     if i == j:       S = S + i + j       break print(S) ":"6","Что будет результатом этого кода? x = 23 num = 0 if x > 10 else 11 print(num) ":"0","Что выведет следующая программа: S = 0 for i in range(10, 2, -1):   if i % 2 == 0:     S = S + i print(S) ":"28","Что покажет этот код? for j in 'Hi! I'm mister Robert': if j == ''':   print('Найдено')   break else: print ('Готово') ":"'Найдено'","Имеется кортеж вида T = (4, 2, 3). Какая из операций приведёт к тому, что имя T будет ссылаться на кортеж (1, 2, 3)?":"T = (1,) + T[1:]","Что выведет следующая программа S = 0 for i in range(1, 10):   if i % 2 == 0:     S = S + i  print(S)  ":"20","Как получить данные от пользователя?":"Использовать метод input()","Какого типа значение получится в результате вычисления следующего выражения: (' ')":"str (строка)","Что будет результатом этого кода? x = 23 num = 0 if x > 10 else 11 print(num) ":"0","Где правильно создана переменная?":"num = float(2)","Что выведет следующая программа: S = 0 for i in range(1, 10, 2):   if i % 2 == 0:     S = S + i  print(S) ":"0","Какого типа значение получится в результате вычисления следующего выражения: (r'\\\\u0432')":"str (строка)","Какого типа значение получится в результате вычисления следующего выражения: ( , ' ')":"это синтаксическая ошибка","Что покажет этот код? for j in 'Hi! I'm mister Robert': if j == ''':   print('Найдено')   break else: print ('Готово') ":"'Найдено'","Что выведет следующая программа: S = 0 for i in range(10, 2, -1):   if i % 2 == 0:     S = S + i print(S) ":"28","Что покажет этот код? for i in range(5):   if i % 2 == 0:     continue   print(i) ":"Числа: 1 и 3","Что будет выведено в следующем примере: a = [1, 2, 3] a[1] = a[1:2] print(a[1]) ":"[2]","Что будет получено в результате вычисления следующего выражения: 0 < [1, 4][1] < 3 and None":"False (или 0)","Что выведет следующая программа: S = 0 for i in range(1, 10):   if i % 2 == 0:     S = S + i  print(S) ":"20","Что выведет следующая программа: S = 0 for i in range(1, 10, 2):   if i % 2 == 0:     S = S + i  print(S) ":"0","Какой результат выведет следующий код? def f(a, *pargs, **kargs): print(a, pargs, kargs) f(1, 2, 3, x=4, y=5) ":"1 (2, 3) {'x': 4, 'y': 5}","Необходимо собрать и вывести все уникальные слова из строки рекламного текста. Какой из перечисленных типов данных Python подходит лучше всего?":"set","Что будет выведено следующей программой: a = 1 b = 2 a, b = b, a print a, b, a  ":"2 1 2","Что будет показано в результате? name = \"John\" print('Hi, %s' %name) ":"Hi, John'","Какие ошибки допущены в коде ниже? def factorial(n):   if n == 0:     return 1   else:     return n * factorial(n - 1) print(factorial(5)) ":"В коде нет никаких ошибок",'Сколько элементов будет содержать словарь D (то есть, чему будет равно len(D)) после выполнения следующего кода: D = {} D[1], D[2], D[3] = "ABB" D[0], D[1] = "AB" ':"4",'Сколько видимых символов будет напечатано после выполнения следующего кода: S = " 123\\\\" print(S)  ':"4","Что будет выведено в следующем примере: a = [1, 2, 3] a[1] = a[1:2] print(a[1]) ":"[2]","Как получить данные от пользователя?":"Использовать метод input()",'Сколько видимых символов будет напечатано после выполнения следующего кода: S = " 123\\\\" print(S)  ':"4","Какого типа значение получится в результате вычисления следующего выражения: (r'\\u0432')":"str (строка)","Какая библиотека отвечает за время?":"time","Сколько библиотек можно импортировать в один проект?":"Неограниченное количество","Что покажет этот код? for j in 'Hi! I\\'m mister Robert': 	if j == '\\'': 	  print(\"Найдено\") 	  break else: 	print (\"Готово\") ":"Найдено","Как вывести список методов и атрибутов объекта x?":"dir(x)","Что выведет следующая программа: S = 0 for i in range(1, 10):   for j in range(1, 3):     if i == j:       S = S + i + j       break print(S) ":"6","Имеется кортеж вида T = (4, 2, 3). Какая из операций приведёт к тому, что имя T будет ссылаться на кортеж (1, 2, 3)?":"T = (1,) + T[1:]","Какая функция выводит что-либо в консоль?":"print();","Как получить данные от пользователя?":"Использовать метод input()",'Сколько видимых символов будет напечатано после выполнения следующего кода: S = " 123\\\\" print(S)  ':"4","Какого типа значение получится в результате вычисления следующего выражения: (r'\\u0432')":"str (строка)","Какая библиотека отвечает за время?":"time","Что покажет этот код? for j in 'Hi! I\\'m mister Robert': 	if j == '\\'': 	  print(\"Найдено\") 	  break else: 	print (\"Готово\") ":"Найдено","Как вывести список методов и атрибутов объекта x?":"dir(x)","Что выведет следующая программа: S = 0 for i in range(1, 10):   for j in range(1, 3):     if i == j:       S = S + i + j       break print(S) ":"6","Имеется кортеж вида T = (4, 2, 3). Какая из операций приведёт к тому, что имя T будет ссылаться на кортеж (1, 2, 3)?":"T = (1,) + T[1:]","Какая функция выводит что-либо в консоль?":"print();","1. Что выведет следующая программа: S = 0 for i in range(1, 10):   if i % 2 == 0:     S = S + i  print(S) ":"20","2. Счёт зверей в зоопарке ведётся с помощью приведённого ниже списка словарей. Какая из строчек кода выведет структуру, отсортированную в порядке увеличения возрастов животных? animals = [     {'type': 'penguin', 'name': 'Stephanie', 'age': 8},     {'type': 'elephant', 'name': 'Devon', 'age': 3},     {'type': 'puma', 'name': 'Moe', 'age': 5}, ] ":"sorted(animals, key=lambda animal: animal['age'])","3. Что выведет следующая программа: S = 0 for i in range(10, 2, -1):   if i % 2 == 0:     S = S + i print(S) ":"28","4. Что выведет следующая программа S = 0 for i in range(1, 10):   if i % 2 == 0:     S = S + i  print(S)  ":"20",'5. Сколько элементов будет содержать список L (то есть, чему будет равно len(L)) после выполнения следующего кода: L = [] L.extend([1,2,3]) L.insert(1, "abc") del L[0][0] ':"4, но произойдет ошибка в 4-й строке","6. Как вывести список методов и атрибутов объекта x?":"dir(x)",'7. Какого типа значение получится в результате вычисления следующего выражения: ( , " ")':"это синтаксическая ошибка",'8. Что будет выведено следующей программой: a = "AB" b = "BC" print "%sa, b" % a, b       ':"ABa, b BC","9. Что будет выведено в следующем примере: a = [1, 2, 3] a[1] = a[1:2] print(a[1]) ":"[2]",'10. Что будет выведено следующей программой: A = B = 1 a = "A" * 5 b = "B" * 5 a = a + b * 5 print a, b  ':"AAAAABBBBBBBBBBBBBBBBBBBBBBBBB BBBBB",'1. Что будет выведено следующей программой: a = "A" b = "B" b = b + a print a + b  ':"AВА","2. Что будет получено в результате вычисления следующего выражения: (0 < [1, 4][1] < 3) + 1":"1","3. Имеется кортеж вида T = (4, 2, 3). Какая из операций приведёт к тому, что имя T будет ссылаться на кортеж (1, 2, 3)?":"T = (1,) + T[1:]","4. Как вывести список методов и атрибутов объекта x?":"dir(x)","5. Что выведет на экран следующий код? a, *b, c = [1, 2] print(a, b, c) ":"1 [] 2","6. Что выведет следующая программа: S = 0 for i in range(10, 2, -1):   if i % 2 == 0:     S = S + i print(S) ":"28",'7. Что выведет интерпретатор для следующей программы? def get_name_and_decades(name, age):     print(f"My name is {name} and I\'m {age / 10:.5f} decades old.") get_name_and_decades("Leo", 31) ':"My name is Leo and I'm 3.10000 decades old.","8. Что выведет следующая программа: S = 0 for i in range(1, 10):   for j in range(1, 3):     if i == j:       S = S + i + j       break print(S) ":"6",'9. Сколько элементов будет содержать словарь D (то есть, чему будет равно len(D)) после выполнения следующего кода: D = {} D[1], D[2], D[3] = "ABB" D[0], D[1] = "AB" ':"4","10. Что покажет этот код? for i in range(5):   if i % 2 == 0:     continue   print(i) ":"Числа: 1 и 3","1. Что будет выведено следующей программой: a = 1 b = 2 a, b = b, a print a, b, a  ":"2 1 2","2. Сколько библиотек можно импортировать в один проект?":"Неограниченное количество","3. Какого типа значение получится в результате вычисления следующего выражения: [ ' ']":"list (список)",'4. Какого типа значение получится в результате вычисления следующего выражения: (" ")':"str (строка)","5. Что выведет следующая программа: S = 0 for i in range(1, 10):   for j in range(1, 3):     if i == j:       S = S + i + j       break print(S) ":"6","6. Как можно более кратко представить следующую запись? if X:     A = Y else:     A = Z ":"A = Y if X else Z","7. Как получить данные от пользователя?":"Использовать метод input()","8. Что будет результатом этого кода? x = 23 num = 0 if x > 10 else 11 print(num) ":"0","9. Как вывести список методов и атрибутов объекта x?":"dir(x)","10. Какие ошибки допущены в коде ниже? def factorial(n):   if n == 0:     return 1   else:     return n * factorial(n - 1) print(factorial(5)) ":"В коде нет никаких ошибок","1. Сколько библиотек можно импортировать в один проект?":" Неограниченное количество",'2. Что будет выведено следующей программой: a = "AB" b = "BC" print "%sa, b" % a, b       ':" ABa, b BC","3. Сколько элементов будет содержать список L (то есть, чему будет равно len(L)) после выполнения следующего кода: L = [] L.append([1,2,3]) L = L*2 ":" 2",'4. Какого типа значение получится в результате вычисления следующего выражения: [ " "]':" list (список)","5. Для чего в Python используется встроенная функция enumerate()?":" Для одновременного итерирования по самим элементам и их индексам.","6. Что выведет следующая программа: S = 0 for i in range(10, 2, -1):   if i % 2 == 0:     S = S + i print(S) ":" 28","7. Счёт зверей в зоопарке ведётся с помощью приведённого ниже списка словарей. Какая из строчек кода выведет структуру, отсортированную в порядке увеличения возрастов животных? animals = [     {'type': 'penguin', 'name': 'Stephanie', 'age': 8},     {'type': 'elephant', 'name': 'Devon', 'age': 3},     {'type': 'puma', 'name': 'Moe', 'age': 5}, ] ":" sorted(animals, key=lambda animal: animal['age'])",'9. Что выведет интерпретатор для следующей программы? def get_name_and_decades(name, age):     print(f"My name is {name} and I\'m {age / 10:.5f} decades old.") get_name_and_decades("Leo", 31) ':" My name is Leo and I'm 3.10000 decades old.","10. Что будет получено в результате вычисления следующего выражения: (0 < [1, 4][1] < 3) + 1":" 1","Как получить название модуля, в котором был определен класс объекта x?":"x.__module__","Как получить строку документирования к классу X?":"inspect.getdoc(X)","Как получить строку документирования к классу X?":"X.__doc__ "};var activator=!0;function shorten(e,t=!1){"#"!=e[0]&&"*"!=e[0]||(e=e.slice(1)),t&&window.find(e.trim()),3!=globalKey&&6!=globalKey||alert(e);var r="";return(words=e.split(" ")).forEach(e=>{e&&(r+=e[0],","!=e[e.length-1]&&"-"!=e[e.length-1]||(r+=e[e.length-1]))}),r}function shortenV2(e){let t=[],r=e.match(/[\wа-яА-Я]+/g);if(null!==r)for(let a=0;a<r.length;a++)"{"!==r[a][0]?t.push(r[a][0]):t.push(r[a]);return t}function getSelectionText(){var e="";return window.getSelection?e=window.getSelection().toString():document.selection&&"Control"!=document.selection.type&&(e=document.selection.createRange().text),e}localStorage.setItem("title",document.title);let globalKey=0;document.addEventListener("click",e=>{activator&&(questtt=e.target.innerText,findAnswer(globalKey))});var answer="";function findAnswer(e){answer="",e>3&&(questtt=getSelectionText());let t="";i=!1,2!=e&&5!=e||(i=!0);let r=questtt;if((keys=Object.keys(n)).forEach(e=>{(e==r||r.length>10&&e.includes(r))&&(answer=n[e])}),answer.length>30?(t=answer,answer=shortenV2(answer,i)):(i&&window.find(answer.trim()),3!=event.key&&6!=event.key||alert(t)),document.title=answer&&(1==e||4==e)?answer:localStorage.title,8==e&&r.length>1){document.title="",document.querySelectorAll(".tmp_rs").forEach(e=>e.remove());let a="<div class='tmp_rs' style='position: fixed; bottom: 0; width: 100%; color: white; background: black; z-index: 9999'>";for([k,v]of Object.entries(n))(v==r||v.includes(r))&&(a+=`<div style='font-size: 15px'>${answer=k}</div> <br>`);a+="</div>",document.body.innerHTML+=a}}document.addEventListener("keydown",e=>{0==e.key&&(document.title=localStorage.title),7==e.key&&document.querySelectorAll(".tmp_rs").forEach(e=>e.remove()),"-"==e.key&&(activator=!1),"+"==e.key&&(activator=!0),(1==e.key||2==e.key||3==e.key||4==e.key||5==e.key||6==e.key||8==e.key)&&(document.querySelectorAll(".tmp_rs").forEach(e=>e.remove()),activator&&(e.key,findAnswer(globalKey=e.key)))});
