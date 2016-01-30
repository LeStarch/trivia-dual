'''
A module to handle player manager functionality

@author: lestarch
'''

class PlayerManager(object):
    '''
    A class to manage players
    '''
    def __init__(self):
        '''
        Setup an empty player manager
        '''
        self.players = {}
        self._current = None
    def add(self,player):
        '''
        Add a new player
        @param player - new player to add 
        '''
        self.players[player.id] = player
    def update(self,player):
        '''
        Update the player
        @param player - updated player
        '''
        self.players[player.id] = player
    def get(self,pid):
        '''
        Get the player with the given id
        @param pid - player id
        @return: player associated with given id
        '''
        try:
            return self.players[pid]
        except KeyError as e:
            return None
    def list(self):
        '''
        List the current players
        @return - list of players
        '''
        return self.players.values()
    def current(self,player):
        '''
        Get old current player, and optionally set a new one
        @param player - (optional) player to add
        @return old current player
        '''
        ret = self._current
        if not current is None:
            self._current = player
        return ret