'''
A module holding lockout functions

@author: lestarch
'''

class Lockout(object):
    '''
    A class holding lockout functions
    '''
    def __init__(self):
        '''
        Initialize this lockout
        '''
        self._value = None
    def set(self,value):
        '''
        Set lockout (if unset)
        @param value - value to set lockout
        @return - True if successful, False otherwise
        '''
        if self._value is None:
            self._value = value
            return True
        return False
    def clear(self):
        '''
        Clear this lockout
        '''
        self._value = None