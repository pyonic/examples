import unittest

def is_even(number):
    ''' Returns True if **number** is even or False if it is odd. '''
    return number % 2

class TestEven(unittest.TestCase):
    # начинается с test_
    def test_even(self):
        test_inputs = [2,3,4,8,15,16,29,54,20,15,75,34,26] # Данные для тестирования
        test_output = [0,1,0,0,1,0,1,0,0,1,1,0,1] # Ожидаемый ответ
        for i in range(len(test_inputs)):
            self.assertEqual(is_even(test_inputs[i]),test_output[i])

if __name__ == "__main__":
    unittest.main()

# python -m unittest example2.py