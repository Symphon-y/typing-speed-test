import { KeyBoardLayoutType } from '@/types/keyboardTypes';
import { keyCodes } from './keyCodes';

export const QWERTY: KeyBoardLayoutType = [
  [
    keyCodes.Escape,
    keyCodes.F1,
    keyCodes.F2,
    keyCodes.F3,
    keyCodes.F4,
    keyCodes.F5,
    keyCodes.F6,
    keyCodes.F7,
    keyCodes.F8,
    keyCodes.F9,
    keyCodes.F10,
    keyCodes.F11,
    keyCodes.F12,
  ],
  [
    keyCodes.Backquote,
    keyCodes.Digit1,
    keyCodes.Digit2,
    keyCodes.Digit3,
    keyCodes.Digit4,
    keyCodes.Digit5,
    keyCodes.Digit6,
    keyCodes.Digit7,
    keyCodes.Digit8,
    keyCodes.Digit9,
    keyCodes.Digit0,
    keyCodes.Minus,
    keyCodes.Equal,
    keyCodes.Backspace,
  ],
  [
    keyCodes.Tab,
    keyCodes.KeyQ,
    keyCodes.KeyW,
    keyCodes.KeyE,
    keyCodes.KeyR,
    keyCodes.KeyT,
    keyCodes.KeyY,
    keyCodes.KeyU,
    keyCodes.KeyI,
    keyCodes.KeyO,
    keyCodes.KeyP,
    keyCodes.BracketLeft,
    keyCodes.BracketRight,
    keyCodes.Backslash,
  ],
  [
    keyCodes.CapsLock,
    keyCodes.KeyA,
    keyCodes.KeyS,
    keyCodes.KeyD,
    keyCodes.KeyF,
    keyCodes.KeyG,
    keyCodes.KeyH,
    keyCodes.KeyJ,
    keyCodes.KeyK,
    keyCodes.KeyL,
    keyCodes.Semicolon,
    keyCodes.Quote,
    keyCodes.Enter,
  ],
  [
    keyCodes.ShiftLeft,
    keyCodes.KeyZ,
    keyCodes.KeyX,
    keyCodes.KeyC,
    keyCodes.KeyV,
    keyCodes.KeyB,
    keyCodes.KeyN,
    keyCodes.KeyM,
    keyCodes.Comma,
    keyCodes.Period,
    keyCodes.Slash,
    keyCodes.ShiftRight,
  ],
  [
    keyCodes.ControlLeft,
    keyCodes.AltLeft,
    keyCodes.MetaLeft,
    keyCodes.Space,
    keyCodes.AltRight,
    keyCodes.ArrowLeft,
    keyCodes.ArrowUp,
    keyCodes.ArrowDown,
    keyCodes.ArrowRight,
  ],
];
