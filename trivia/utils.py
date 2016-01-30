'''
Utility functions

@author: lestarch
'''
import uuid
import logging

def generateUUID():
    '''
    Generate a new UUID
    '''
    return uuid.uuid()
def setupLogging():
    '''
    Sets up the logging settings for trivia...
    '''
    logging.basicConfig(level=logging.DEBUG)