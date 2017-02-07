module Main where

import Prelude
import Control.Monad.Eff (Eff)
import Control.Monad.Eff.Console (CONSOLE, log)

foreign import data WUU :: !

foreign import wuu :: forall e. Int -> Eff (wuu :: WUU |e) Unit

-- main :: forall e. Eff (console :: CONSOLE | e) Unit
main = do
  wuu 8080
  log "Hello sailor!"
