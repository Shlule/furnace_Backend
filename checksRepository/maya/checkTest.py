class FurnaceCheckBase:
    def __init__(self):
        pass
    def check(self):
        pass
    def fix(self):
        pass
        
class CheckTest(FurnaceCheckBase):
    def __init__(self):
        super().__init__()
    
if __name__ == "__main__":
    test = CheckTest()
    test.check()