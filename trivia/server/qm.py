'''
A module used for question managment functions

@author: lestarch
'''
import json

import trivia.server.persist

class QuestionManager(object):
    '''
    Question manager loads question files and returns a list of questions
    '''
    def __init__(self,files):
        '''
        Build this question manager
        @param files - a lis of files to load
        '''
        self.presist = trivia.server.persist.JSON()
        self.cats = {}
        self._current = None
        for file in files:
            self.load(file)
        self._last = None
    def load(self,file):
        '''
        Load a files question
        @param file - full path to load from 
        '''
        for question in self.presist.questions(file):
            if not question._category in self.cats:
                self.cats[question._category] = {}
            self.cats[question._category][question._title] = question
    def list(self):
        '''
        Lists questions
        @return - map of questions
        '''
        return self.cats
    def current(self):
        '''
        Gets the current question
        @return - currently selected question
        '''
        return self._current
    def attempt(self,answer,finish=False):
        '''
        Attempt to answer this question
        @param answer - answer to check
        @param finish - (optional) mark this question as answered afterward
        @return True if correct False otherwise
        '''
        correct = self._current.check(answer)
        if finish or correct:
            self._current.answered = True
        self._last = answer
        return correct
    def select(self, category, title):
        '''
        Selects a given question as current
        @param category - category used to select
        @param title - title used to select
        '''
        cur = self.cats[category][title]
        if cur._answered:
            raise InvalidSelectionException("Cannot select already answered question")
        self._current = cur
    def last(self):
        '''
        Gets the last attempted answer
        @return - answer last attempted
        '''
        return self._last
class InvalidSelectionException(Exception):
    pass