import { unicodeLookup } from './unicode';

export const enum CharType {
  IDStart,
  Zero,
  Number,
  Invalid,
  LineTerminator,
  Exclamation,
  OpenParen,
  CloseParen,
  OpenBracket,
  CloseBracket,
  Comma,
  Colon,
  Question,
  Tilde,
  Quote,
  BackQuote,
  Dot,
  Slash,
  BackSlash,
  Semicolon,
  OpenBrace,
  CloseBrace,
  Add,
  Sub,
  Multiply,
  Modulo,
  And,
  Xor,
  Or,
  Less,
  Greater,
  Equal,
  WhiteSpace,
  PrivateName
}

const LatinLetters = [
  CharType.Invalid,
  CharType.Invalid,
  CharType.Invalid,
  CharType.Invalid,
  CharType.Invalid,
  CharType.Invalid,
  CharType.Invalid,
  CharType.Invalid,
  CharType.Invalid,
  CharType.WhiteSpace,
  CharType.LineTerminator,
  CharType.WhiteSpace,
  CharType.WhiteSpace,
  CharType.LineTerminator,
  CharType.Invalid,
  CharType.Invalid,
  CharType.Invalid,
  CharType.Invalid,
  CharType.Invalid,
  CharType.Invalid,
  CharType.Invalid,
  CharType.Invalid,
  CharType.Invalid,
  CharType.Invalid,
  CharType.Invalid,
  CharType.Invalid,
  CharType.Invalid,
  CharType.Invalid,
  CharType.Invalid,
  CharType.Invalid,
  CharType.Invalid,
  CharType.Invalid,
  CharType.WhiteSpace,
  CharType.Exclamation,
  CharType.Quote,
  CharType.Invalid,
  CharType.IDStart,
  CharType.Modulo,
  CharType.And,
  CharType.Quote,
  CharType.OpenParen,
  CharType.CloseParen,
  CharType.Multiply,
  CharType.Add,
  CharType.Comma,
  CharType.Sub,
  CharType.Dot,
  CharType.Slash,
  CharType.Zero,
  CharType.Number,
  CharType.Number,
  CharType.Number,
  CharType.Number,
  CharType.Number,
  CharType.Number,
  CharType.Number,
  CharType.Number,
  CharType.Number,
  CharType.Colon,
  CharType.Semicolon,
  CharType.Less,
  CharType.Equal,
  CharType.Greater,
  CharType.Question,
  CharType.PrivateName,
  CharType.IDStart,
  CharType.IDStart,
  CharType.IDStart,
  CharType.IDStart,
  CharType.IDStart,
  CharType.IDStart,
  CharType.IDStart,
  CharType.IDStart,
  CharType.IDStart,
  CharType.IDStart,
  CharType.IDStart,
  CharType.IDStart,
  CharType.IDStart,
  CharType.IDStart,
  CharType.IDStart,
  CharType.IDStart,
  CharType.IDStart,
  CharType.IDStart,
  CharType.IDStart,
  CharType.IDStart,
  CharType.IDStart,
  CharType.IDStart,
  CharType.IDStart,
  CharType.IDStart,
  CharType.IDStart,
  CharType.IDStart,
  CharType.OpenBracket,
  CharType.BackSlash,
  CharType.CloseBracket,
  CharType.Xor,
  CharType.IDStart,
  CharType.BackQuote,
  CharType.IDStart,
  CharType.IDStart,
  CharType.IDStart,
  CharType.IDStart,
  CharType.IDStart,
  CharType.IDStart,
  CharType.IDStart,
  CharType.IDStart,
  CharType.IDStart,
  CharType.IDStart,
  CharType.IDStart,
  CharType.IDStart,
  CharType.IDStart,
  CharType.IDStart,
  CharType.IDStart,
  CharType.IDStart,
  CharType.IDStart,
  CharType.IDStart,
  CharType.IDStart,
  CharType.IDStart,
  CharType.IDStart,
  CharType.IDStart,
  CharType.IDStart,
  CharType.IDStart,
  CharType.IDStart,
  CharType.IDStart,
  CharType.OpenBrace,
  CharType.Or,
  CharType.CloseBrace,
  CharType.Tilde,
  CharType.Invalid,
  CharType.Invalid,
  CharType.Invalid,
  CharType.Invalid,
  CharType.Invalid,
  CharType.Invalid,
  CharType.Invalid,
  CharType.Invalid,
  CharType.Invalid,
  CharType.Invalid,
  CharType.Invalid,
  CharType.Invalid,
  CharType.Invalid,
  CharType.Invalid,
  CharType.Invalid,
  CharType.Invalid,
  CharType.Invalid,
  CharType.Invalid,
  CharType.Invalid,
  CharType.Invalid,
  CharType.Invalid,
  CharType.Invalid,
  CharType.Invalid,
  CharType.Invalid,
  CharType.Invalid,
  CharType.Invalid,
  CharType.Invalid,
  CharType.Invalid,
  CharType.Invalid,
  CharType.Invalid,
  CharType.Invalid,
  CharType.Invalid,
  CharType.Invalid,
  CharType.WhiteSpace,
  CharType.Invalid,
  CharType.Invalid,
  CharType.Invalid,
  CharType.Invalid,
  CharType.Invalid,
  CharType.Invalid,
  CharType.Invalid,
  CharType.Invalid,
  CharType.Invalid,
  CharType.IDStart,
  CharType.Invalid,
  CharType.Invalid,
  CharType.Invalid,
  CharType.Invalid,
  CharType.Invalid,
  CharType.Invalid,
  CharType.Invalid,
  CharType.Invalid,
  CharType.Invalid,
  CharType.Invalid,
  CharType.IDStart,
  CharType.Invalid,
  CharType.Invalid,
  CharType.Invalid,
  CharType.Invalid,
  CharType.IDStart,
  CharType.Invalid,
  CharType.Invalid,
  CharType.Invalid,
  CharType.Invalid,
  CharType.Invalid,
  CharType.IDStart,
  CharType.IDStart,
  CharType.IDStart,
  CharType.IDStart,
  CharType.IDStart,
  CharType.IDStart,
  CharType.IDStart,
  CharType.IDStart,
  CharType.IDStart,
  CharType.IDStart,
  CharType.IDStart,
  CharType.IDStart,
  CharType.IDStart,
  CharType.IDStart,
  CharType.IDStart,
  CharType.IDStart,
  CharType.IDStart,
  CharType.IDStart,
  CharType.IDStart,
  CharType.IDStart,
  CharType.IDStart,
  CharType.IDStart,
  CharType.IDStart,
  CharType.Invalid,
  CharType.IDStart,
  CharType.IDStart,
  CharType.IDStart,
  CharType.IDStart,
  CharType.IDStart,
  CharType.IDStart,
  CharType.IDStart,
  CharType.IDStart,
  CharType.IDStart,
  CharType.IDStart,
  CharType.IDStart,
  CharType.IDStart,
  CharType.IDStart,
  CharType.IDStart,
  CharType.IDStart,
  CharType.IDStart,
  CharType.IDStart,
  CharType.IDStart,
  CharType.IDStart,
  CharType.IDStart,
  CharType.IDStart,
  CharType.IDStart,
  CharType.IDStart,
  CharType.IDStart,
  CharType.IDStart,
  CharType.IDStart,
  CharType.IDStart,
  CharType.IDStart,
  CharType.IDStart,
  CharType.IDStart,
  CharType.IDStart,
  CharType.Invalid,
  CharType.IDStart,
  CharType.IDStart,
  CharType.IDStart,
  CharType.IDStart,
  CharType.IDStart,
  CharType.IDStart,
  CharType.IDStart,
  CharType.IDStart
];

export function isIdentifierPart(code: Chars): boolean {
  return LatinLetters[code] <= CharType.Number || (unicodeLookup[(code >>> 5) + 0] >>> code & 31 & 1) !== 0;
}

export function isIdentifierStart(code: Chars): boolean {
  return LatinLetters[code] === CharType.IDStart || (unicodeLookup[(code >>> 5) + 34816] >>> code & 31 & 1) !== 0;
}

/**
 * A list of character constants with much more human-readable names.
 */
/*@internal*/
export const enum Chars {

    // Optimized for the  0...127 range
    MaxAsciiCharacter = (1 << 7) - 1, // '0x7F'

    Null           = 0x00,
    Backspace      = 0x08,
    Tab            = 0x09,
    LineFeed       = 0x0A,
    VerticalTab    = 0x0B,
    FormFeed       = 0x0C,
    CarriageReturn = 0x0D,
    Space          = 0x20,
    Exclamation    = 0x21,
    DoubleQuote    = 0x22,
    Hash           = 0x23,
    Dollar         = 0x24,
    Percent        = 0x25,
    Ampersand      = 0x26,
    SingleQuote    = 0x27,
    LeftParen      = 0x28,
    RightParen     = 0x29,
    Asterisk       = 0x2A,
    Plus           = 0x2B,
    Comma          = 0x2C,
    Hyphen         = 0x2D,
    Period         = 0x2E,
    Slash          = 0x2F,
    At             = 0x40,
    Backtick       = 0x60,
    LeftBracket    = 0x5B,
    Backslash      = 0x5C,
    RightBracket   = 0x5D,
    Caret          = 0x5E,
    Underscore     = 0x5F,
    LeftBrace      = 0x7B,
    VerticalBar    = 0x7C,
    RightBrace     = 0x7D,
    Tilde          = 0x7E,
    Colon          = 0x3A,
    Semicolon      = 0x3B,
    LessThan       = 0x3C,
    EqualSign      = 0x3D,
    GreaterThan    = 0x3E,
    QuestionMark   = 0x3F,

    /* Numbers  */

    Zero   = 0x30,
    One    = 0x31,
    Two    = 0x32,
    Three  = 0x33,
    Four   = 0x34,
    Five   = 0x35,
    Six    = 0x36,
    Seven  = 0x37,
    Eight  = 0x38,
    Nine   = 0x39,

    /* 'A' - 'Z' */
    UpperA = 0x41,
    UpperB = 0x42,
    UpperC = 0x43,
    UpperD = 0x44,
    UpperE = 0x45,
    UpperF = 0x46,
    UpperG = 0x47,
    UpperH = 0x48,
    UpperI = 0x49,
    UpperJ = 0x4A,
    UpperK = 0x4B,
    UpperL = 0x4C,
    UpperM = 0x4D,
    UpperN = 0x4E,
    UpperO = 0x4F,
    UpperP = 0x50,
    UpperQ = 0x51,
    UpperR = 0x52,
    UpperS = 0x53,
    UpperT = 0x54,
    UpperU = 0x55,
    UpperV = 0x56,
    UpperW = 0x57,
    UpperX = 0x58,
    UpperY = 0x59,
    UpperZ = 0x5A,

    /* 'a' - 'z' */

    LowerA  = 0x61,
    LowerB  = 0x62,
    LowerC  = 0x63,
    LowerD  = 0x64,
    LowerE  = 0x65,
    LowerF  = 0x66,
    LowerG  = 0x67,
    LowerH  = 0x68,
    LowerI  = 0x69,
    LowerJ  = 0x6A,
    LowerK  = 0x6B,
    LowerL  = 0x6C,
    LowerM  = 0x6D,
    LowerN  = 0x6E,
    LowerO  = 0x6F,
    LowerP  = 0x70,
    LowerQ  = 0x71,
    LowerR  = 0x72,
    LowerS  = 0x73,
    LowerT  = 0x74,
    LowerU  = 0x75,
    LowerV  = 0x76,
    LowerW  = 0x77,
    LowerX  = 0x78,
    LowerY  = 0x79,
    LowerZ  = 0x7A,

    /* Zs space */
    NextLine           = 0x85,
    NonBreakingSpace   = 0xA0,
    Ogham              = 0x1680,
    EnQuad             = 0x2000,
    EmQuad             = 0x2001,
    EnSpace            = 0x2002,
    EmSpace            = 0x2003,
    ThreePerEmSpace    = 0x2004,
    FourPerEmSpace     = 0x2005,
    SixPerEmSpace      = 0x2006,
    FigureSpace        = 0x2007,
    PunctuationSpace   = 0x2008,
    ThinSpace          = 0x2009,
    HairSpace          = 0x200A,
    ZeroWidthSpace     = 0x200B,
    Zwnj               = 0x200C,
    Zwj                = 0x200D,
    Zwnbs              = 0xFEFF,
    LineSeparator      = 0x2028,
    ParagraphSeparator = 0x2029,
    NarrowNoBreakSpace = 0x202F,
    MathematicalSpace  = 0x205F,
    IdeographicSpace   = 0x3000,
    ByteOrderMark = 0xFFEF,

    /* Surrogate pair values */

    LeadSurrogateMin = 0xD800,
    LeadSurrogateMax = 0xDBFF,
    TrailSurrogateMin = 0xDC00,
    TrailSurrogateMax = 0xDFFF,

    NonBMPMin = 0x10000,
    NonBMPMax = 0x10FFFF,
}
