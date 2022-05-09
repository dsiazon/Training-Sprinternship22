# create your class here
class Car:
    # instance attributes
    def __init__(self, model, speed):
        self.model = model
        self.speed = speed
    
    # instance method
    def getModel(self):
        return self.model
    def setSpeed(self, speed):
        self.speed = speed

if __name__ == '__main__':
    bmw = Car('BMW', 30.3)
    print(bmw.getModel(), bmw.speed)
    bmw.setSpeed(65)
    print(bmw.getModel(), bmw.speed)
