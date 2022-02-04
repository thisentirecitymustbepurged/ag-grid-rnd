1. What I really meant by not losing data...
2. Problems with resolving / extrapolating data on the go (in the view, or wherever)
   1. Potential duplication
   2. Domain logic becomes obscured and hidden in the view / wherever
3. Whereas if you resolve all your data BEFORE feeding it into your pipelines (for example, the view), it means all of your domain logic ends up sitting in centralized place which results in:
   1. Centralized source of domain knowledge
   2. Lower change of duplicating logic because it is likely going to be sitting in the same file
