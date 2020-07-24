class Solution:
    def allPathsSourceTarget(self, graph: List[List[int]]) -> List[List[int]]:
        
        if not graph:
            return []
        return self.topologicalSort(graph,0,[],[0])
    
    def topologicalSort(self,graph,i,t,path):
        if i == len(graph)-1:
            return [path]
        for j in graph[i]:
            t.extend(self.topologicalSort(graph,j,t,path+[j]))
        return t if i==0 else []