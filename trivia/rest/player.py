'''
Created on Oct 30, 2015

@author: lestarch
'''
from flask_restful import Resource

import trivia.models.player

class PlayersResource(Resource):
    '''
    A restful version of the player object
    '''
    def __init__(self, pm):
        '''
        Constructor
        '''
        self.pm = pm
    def post(self,data):
        '''
        Add a given player
        @param data: player data to update the player with
        '''
        play = trivia.models.player.Player(**data)
        self.pm.add(play)
    def get(self):
        '''
        List the current players
        @return - list of players
        '''
        return self.pm.list()
class PlayerResource(Resource):
    '''
    A restful version of the player object
    '''
    def __init__(self, pm):
        '''
        Constructor
        '''
        self.pm = pm
    def put(self,pid,data):
        '''
        Create a new player resource
        @param pid: player id
        @param data: data to add
        @return: newly created player
        '''
        play = trivia.models.player.Player(**data)
        self.pm.update(play)
    def get(self,pid):
        '''
        List the current players
        @param pid - player id of player to return
        @return - player
        '''
        return self.pm.get(pid)
def setup(api,pm):
    '''
    Setup the resources
    '''
    api.add_resource(PlayersResource,"/players/",resource_class_kwargs={"pm":pm})
    api.add_resource(PlayerResource,"/players/<pid>",resource_class_kwargs={"pm":pm})
        