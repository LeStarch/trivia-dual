'''
This module holds all the player related models.

@author: lestarch
'''
import trivia.utils

class Player(object):
    '''
    A class representing a player
    '''
    def __init__(self, id=None, name="Anonymous", score=0):
        '''
        Creates a new player
        @param id - (optional) id of the player or None to generate a new one
        @param name - (optional) name of player
        @param score - score of this player
        '''
        self._id = id if not id is None else trivia.utils.generateUUID()
        self._name = name
        self._score = score

    def id(self,id=None):
        '''
        Get old id and optionally set a new one
        @param id - (optional) id to replace the old one
        @return the old id of this player
        '''
        ret = self._id
        if not id is None:
            self._id = id
        return ret
    def name(self,name=None):
        '''
        Get old name and optionally set a new one
        @param name - (optional) name to replace old one
        @return the old name of this player
        '''
        ret = self._name
        if not name is None:
            self._name = name
        return ret
    def score(self,score=None):
        '''
        Get old score and optionally set a new one
        @param score - (optional) score to replace old one
        @return the old name of this player
        '''
        ret = self._score
        if not score is None:
            self._score = score
        return ret
    