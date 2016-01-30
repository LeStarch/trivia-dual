'''
A module handling the question models

@author: lestarch
'''
import trivia.utils

class Question(object):
    '''
    A class representing the question for the trivia game
    '''
    def __init__(self, id=None, category, title, question, answers, answer, points):
        '''
        Creates a question
        @param id - (optional) id or None to generate new one
        @param category - category of this question
        @param title - title of the question
        @param question - question of the title
        @param answers - list of possible answers (empty list for non-multiple choice)
        @param anser 
        '''
        self._id= id if not id is None else trivia.utils.generateUUID()
        self._category = category
        self._title = title
        self._question = question
        self._answers = answers
        self._answer = answer
        self._points = points
        self._answered = False
        if not self.validate():
            raise InvalidQuestionException("New question failed validation: :{0}".format(str(self)))
    def check(self,answer):
        '''
        Check an answer to this question
        @param answer - answer to check
        @return - true if answer is correct, false otherwise
        '''
        if len(self._answers) > 0:
            return (answer in self._answers)
        return Question.simplify(answer) == Question.simplify(self._answer)
    def validate(self):
        '''
        Validate this question
        @return - true if this is a valid question, false otherwise
        '''
        return self.check(self.answer)
    @classmethod
    def simplify(clazz,answer):
        '''
        Simplify an answer to make checking easier
        @param answer - answer to simplify for checking
        @return simplified answer
        '''
        return ("".join(answer.split())).lower()
class InvalidQuestionException(Exception):
    pass