'''
A module to handle persistence

@author: lestarch
'''
import json

import trivia.models.question

class JSON(object):
    '''
    A class to load JSON files
    '''
    @classmethod
    def questions(cls,file):
        '''
        Load questions from a file
        @param file - file to load from
        '''
        questions = []
        with open(file,"r") as file:
            objects = json.load(file)
        for object in objects:
            questions.append(Question(**object))