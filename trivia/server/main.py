'''
Main module for the trivia server

@author: lestarch
'''
from flask import Flask
from flask_restful import Api

from ipc.command.command import Command,Receiver
from ipc.proxy import ProxyFactory
from ipc.registry import Registry

import trivia.utils
import trivia.rest.player
from trivia.server.pm import PlayerManager

app = Flask(__name__)
api = Api(app)

def main():
    '''
    Main function
    '''
    trivia.utils.setupLogging()
    cmd = Command()
    rec = Receiver()
    factory = ProxyFactory(Registry(),cmd)
    pm = factory.create(PlayerManager(), "player-manager")
    trivia.rest.player.setup(api,pm)
    app.run()
if __name__ == "__main__":
    '''
    Entry point
    '''
    main()