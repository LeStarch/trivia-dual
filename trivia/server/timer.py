'''
A module to handle timer functions

@author: lestarch
'''
import time

class Timer(object):
    '''
    A class representing a timer
    '''
    def __init__(self):
        '''
        Setup a basic timer
        '''
        pass
    def start(self,time):
        '''
        Start a new count down for the given time
        @param time - number of seconds to count down
        '''
        self._end = time.time() + time
    def current(self):
        '''
        Return the time remaining on this timer
        @return - time remaining on this timer
        '''
        return self._end - time.time()